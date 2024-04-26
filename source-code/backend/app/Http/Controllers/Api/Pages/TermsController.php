<?php

namespace App\Http\Controllers\Api\Pages;

use App\Http\Controllers\Controller;
use App\Http\Resources\Pages\StaticResource;
use App\Models\Pages\Agreement;
use App\Models\Pages\Policy;
use App\Models\Pages\Terms;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TermsController extends Controller
{
    public function __invoke()
    {
        $latestUpdatedAt = Terms::orderBy('updated_at', 'desc')->value('updated_at');
        $date = Carbon::parse($latestUpdatedAt)->format('d') . ' ' . Carbon::parse(
                $latestUpdatedAt
            )->getTranslatedMonthName('F') . ' ' . Carbon::parse($latestUpdatedAt)->format('Y');
        return response()->json(['data' => StaticResource::collection(Terms::all()), 'updated' => $date]);
    }
}
