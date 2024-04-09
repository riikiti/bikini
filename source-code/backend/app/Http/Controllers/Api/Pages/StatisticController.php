<?php

namespace App\Http\Controllers\Api\Pages;

use App\Http\Controllers\Controller;
use App\Models\Contest;
use App\Models\Statistic;
use App\Models\WinnerList;
use Illuminate\Http\Request;

class StatisticController extends Controller
{
    public function index(Request $request)
    {
        $model = auth()->user();
        $statistics = Statistic::query()
            ->where('model_id', $model->id)
            ->whereIn('type', [1, 5, 15, 25, 50])
            ->orderBy('type')
            ->get();


        return response()->json([
            'status' => 'ok',
            'data' => $statistics
        ]);
    }

}
