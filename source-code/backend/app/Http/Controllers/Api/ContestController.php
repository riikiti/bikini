<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ContestResource;
use App\Models\Contest;
use Illuminate\Http\Request;

class ContestController extends Controller
{
    public function index()
    {
        return response()->json(['status' => 'success', 'data' => ContestResource::collection(Contest::all())]);
    }

    public function show()
    {
        $contest = Contest::query()->where('active', true)->first();
        if (!empty($model)) {
            return response()->json(['status' => 'success', 'data' => ContestResource::make($contest)]);
        } else {
            return response()->json(['status' => 'not found']);
        }
    }
}
