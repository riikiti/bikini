<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Favourite;
use App\Models\User;

class ApplicationController extends Controller
{
    public function __invoke()
    {
        $moderator_id = User::query()->where('role', User::ADMIN)->first()->id;

        $count = Favourite::query()->where('user_id', auth()->user()->id)->count();
        
        return response()->json([
            'status' => 'success',
            'favourites_count' => $count,
            'moderator_id' => $moderator_id
        ]);
    }
}
