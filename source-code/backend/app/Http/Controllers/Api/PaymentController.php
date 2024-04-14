<?php

namespace App\Http\Controllers\Api;

use App\Enum\PaymentStatusEnum;
use App\Http\Controllers\Controller;
use App\Http\Resources\StatisticResource;
use App\Models\ContestModel;
use App\Models\Statistic;
use App\Models\Transaction;
use App\Services\Helpers\Payment\PaymentHelperService;
use Illuminate\Http\JsonResponse;
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


    public function createFree(Request $request): JsonResponse
    {
        $check = Statistic::query()->where('user_id', auth()->user()->id)->where(
            'model_id',
            $request->input('model_id')
        )->where('type', 1)->first();

        if (isset($check)) {
            return response()->json(['status' => 'reject', 'message' => 'didnt create transaction']);
        } else {
            $transaction = Statistic::create([
                'type' => 1,
                'user_id' => auth()->user()->id,
                'model_id' => $request->input('model_id')
            ]);

            $contest = ContestModel::query()->where('isActive', true)->where(
                'user_id',
                $request->input('model_id')
            )->first();

            if ($contest) {
                $contest->freeRating = 1;
                $contest->save();
            }
            return response()->json(['status' => 'inject', 'data' => StatisticResource::make($transaction)]);
        }
    }

    public function create(Request $request): JsonResponse
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
        $amount = $payment->amount;
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
                    $contest = ContestModel::query()
                        ->where('user_id', $transaction->model_id)
                        ->where('isActive', true)
                        ->first();
                    Log::channel('sms')->info(intval($transaction->model_id));
                    Log::channel('sms')->info(intval($amount->value));
                    $contest->fill(['paidRating', intval($amount->value)])->save();
                }
            }
        }
        if (isset($payment->status) && $payment->status === 'waiting_for_capture') {
            $metadata = $payment->metadata;
            if (isset($metadata->transaction_id)) {
                $transactionId = intval($metadata->transaction_id);
                $transaction = Statistic::findOrFail($transactionId);
                $transaction->fill(['status' => PaymentStatusEnum::WAITING])->save();
                $contest = ContestModel::query()->where('user_id', $transaction->model_id)->where(
                    'isActive',
                    true
                )->first();
                Log::channel('sms')->info(intval($transaction->model_id));
                Log::channel('sms')->info(intval($amount->value));
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
