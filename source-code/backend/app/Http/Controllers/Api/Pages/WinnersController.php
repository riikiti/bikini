<?php

namespace App\Http\Controllers\Api\Pages;

use App\Http\Controllers\Controller;
use App\Models\Contest;
use App\Models\WinnerList;
use Illuminate\Http\Request;

class WinnersController extends Controller
{
    public function index(Request $request)
    {
        $contests = Contest::all();
        $data = [];
        $i = 0;

        foreach ($contests as $contest) {
            $i++;
            //берем верхние 3 по данному конкурсу
            $winners = WinnerList::query()->where('contest_id',$contest->id)->get();
            $data[] = [
                "contest_$i" => $contest,
                "winners_$i" => $winners,
            ];
        }

        return response()->json(['status' => 'ok', 'data' => $data]);
    }

}
