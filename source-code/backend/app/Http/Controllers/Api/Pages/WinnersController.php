<?php

namespace App\Http\Controllers\Api\Pages;

use App\Http\Controllers\Controller;
use App\Http\Resources\WinnerFullResource;
use App\Models\Contest;
use App\Models\WinnerList;

class WinnersController extends Controller
{
    public function index()
    {
        $contests = Contest::all();
        $data = [];

        foreach ($contests as $contest) {
            $winners = WinnerList::query()->where('contest_id',$contest->id)->get();
            $data[] = [
                "contest" => $contest,
                "winners" => WinnerFullResource::collection($winners),
            ];
        }

        return response()->json(['status' => 'ok', 'data' => $data]);
    }

}
