<?php

namespace App\Http\Controllers\Api;

use App\Enum\PaymentStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\Statistic;
use App\Models\Transaction;
use App\Services\Helpers\Payment\PaymentHelperService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use YooKassa\Model\Notification\NotificationEventType;
use YooKassa\Model\Notification\NotificationSucceeded;
use YooKassa\Model\Notification\NotificationWaitingForCapture;

class PaymentController extends Controller
{

    private PaymentHelperService $paymentHelper;

    public function __construct()
    {
        $this->paymentHelper = app(PaymentHelperService::class);
    }

    public function index()
    {
        // TODO: Implement index() method.
    }

    public function create(Request $request)
    {
        $transaction = Statistic::create([
            'type' => intval($request->input('type')),
            'user_id' => auth()->user()->id,
            'model_id' => $request->input('model_id')
        ]);
        if ($transaction) {
            return response()->json(
                [
                    'status' => 'inject',
                    'link' => $this->paymentHelper->createPayment(
                        $transaction->type,
                        ['transaction_id' => $transaction->id]
                    )
                ]
            );
        } else {
            return response()->json(['status' => 'reject', 'message' => 'didnt create transaction']);
        }
    }

    public function callback(Request $request)
    {
        $source = file_get_contents('php://input');
        Log::channel('sms')->info($source);
        $requestBody = json_decode($source, true);
        $notification = (isset($requestBody['event']) && $requestBody['event'] === NotificationEventType::PAYMENT_SUCCEEDED)
            ? new NotificationSucceeded($requestBody)
            : new NotificationWaitingForCapture($requestBody);
        $payment = $notification->getObject();
        Log::channel('sms')->info($payment->status);

        if (isset($payment->status) && $payment->status == 'canceled') {
            $metadata = $payment->metadata;
            if (isset($metadata->transaction_id)) {
                $transactionId = intval($metadata->transaction_id);
                $transaction = Statistic::findOrFail($transactionId);
                $transaction->fill(['status' => PaymentStatusEnum::FAILED])->save();
            }
        }

        if (isset($payment->status) && $payment->status === 'succeeded') {
            if ($payment->paid) {
                $metadata = $payment->metadata;
                if (isset($metadata->transaction_id)) {
                    $transactionId = intval($metadata->transaction_id);
                    $transaction = Statistic::findOrFail($transactionId);
                    $transaction->fill(['status' => PaymentStatusEnum::CONFIRM])->save();
                    //todo добавить в конкурс https://www.youtube.com/watch?v=YlE433y5A9M&t=186s
                }
            }
        }
        if (isset($payment->status) && $payment->status === 'waiting_for_capture') {
            $metadata = $payment->metadata;
            if (isset($metadata->transaction_id)) {
                $transactionId = intval($metadata->transaction_id);
                $transaction = Statistic::findOrFail($transactionId);
                $transaction->fill(['status' => PaymentStatusEnum::WAITING])->save();
            }
        }


        if (isset($payment->status) && $payment->status === 'failed') {
            $metadata = $payment->metadata;
            if (isset($metadata->transaction_id)) {
                $transactionId = intval($metadata->transaction_id);
                $transaction = Statistic::findOrFail($transactionId);
                $transaction->fill(['status' => PaymentStatusEnum::FAILED])->save();
            }
        }
    }
}
