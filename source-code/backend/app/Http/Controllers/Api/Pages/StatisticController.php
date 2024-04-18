<?php

namespace App\Http\Controllers\Api\Pages;

use App\Enum\PaymentStatusEnum;
use App\Http\Controllers\Controller;
use App\Http\Resources\StatisticResource;
use App\Http\Resources\UserStatisticResource;
use App\Models\Contest;
use App\Models\ContestModel;
use App\Models\Statistic;
use App\Models\User;
use App\Models\WinnerList;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class StatisticController extends Controller
{
    public function index(Request $request)
    {
        $statistics = Statistic::query()
            ->where('model_id', auth()->user()->id)
            ->where('status', PaymentStatusEnum::CONFIRM->value)
            ->whereIn('type', [1, 5, 15, 25, 50])
            ->orderBy('type')
            ->get();

        $a = StatisticResource::collection($statistics);
        $statistics = [
            1 => [],
            5 => [],
            15 => [],
            25 => [],
            50 => [],
        ];

        $result = [];

        foreach ($a as $item) {
            if (array_key_exists($item['type'], $statistics)) {
                $statistics[$item['type']][] = $item['user_id'];
            }
        }

        foreach ($statistics as $type => $users) {
            $out = [];
            foreach ($users as $user_id) {
                $out[] = UserStatisticResource::make(User::find($user_id));
            }
            $result[] = [
                'type' => $type,
                'users' => $out,
            ];
        }
        return response()->json([
            'status' => 'ok',
            'data' => $result,
        ]);
    }
    public function createFree(Request $request): JsonResponse
    {
        $check = Statistic::query()
            ->where('user_id', auth()->user()->id)
            ->where('model_id', $request->input('model_id'))
            ->where('type', 1)->exists();
        if ($check) {
            return response()->json(['status' => 'reject', 'message' => 'didnt create transaction']);
        } else {
            $transaction = Statistic::create([
                'type' => 1,
                'user_id' => auth()->user()->id,
                'model_id' => $request->input('model_id')
            ]);
            $activeContest = Contest::query()->where('is_active', true)->first();
            $contest = ContestModel::query()->where('contest_id', $activeContest->id)->where(
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

}
