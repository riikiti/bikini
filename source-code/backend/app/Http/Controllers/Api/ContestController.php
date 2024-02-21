<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ContestModelsResource;
use App\Http\Resources\ContestResource;
use App\Models\Contest;
use App\Models\ContestModel;
use Illuminate\Http\Request;

class ContestController extends Controller
{
    public function index()
    {
        return response()->json([
            'status' => 'success',
            'data' => ContestResource::collection(Contest::all())]);
    }

    public function show()
    {
        $contest = Contest::query()->where('is_active', true)->first();

        $ContestModels = ContestModel::query()->where('contest_id', $contest->id)->get();

        if (!empty($contest)) {
            return response()->json([
                'status' => 'success',
                'data' => ContestResource::make($contest),
                'models' => ContestModelsResource::collection($ContestModels) ]);
        } else {
            return response()->json(['status' => 'not found']);
        }
    }

    public function create()
    {
//
    }

    public function update()
    {
//
    }
}
