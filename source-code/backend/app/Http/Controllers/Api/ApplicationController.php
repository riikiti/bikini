<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Favourite;
use App\Models\User;
use App\Services\CheckService;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function __invoke()
    {
        $moderator_id = User::query()->where('role',User::ADMIN)->first()->id;
        $count =  match (auth()->user()->role) {
            User::USER => $count = $this->getUserFavorites(),
            User::MODEL => $count = $this->getModelFavorites(),
        };

        return response()->json([
            'status' => 'success',
            'favourites_count' => $count,
            'moderator_id' => $moderator_id
        ]);
    }

    public function getUserFavorites(): int
    {
        return Favourite::query()->where('user_id', auth()->user()->id)->count();
    }

    public function getModelFavorites(): int
    {
        return Favourite::query()->where('model_id', auth()->user()->id)->count();
    }
}
