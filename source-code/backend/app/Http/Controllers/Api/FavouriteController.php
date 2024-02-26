<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Favourite;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FavouriteController extends Controller
{

    public function addToFavourite(Request $request, User $user): JsonResponse
    {
        $authUser = $request->user();

        $data = ['model_id' => $user->id, 'user_id' => $authUser->id];

        $raw = Favourite::query()
            ->where('user_id', $authUser->id)
            ->where('model_id', $user->id)
            ->first();

        if ($raw) {
            return response()->json([
                'status' => 'already in favorites',
            ]);
        } else {
            Favourite::create($data);
            return response()->json([
                'status' => 'success',
                'data' => 'Добавлено в избранное'
            ]);
        }


    }

    public function removeFromFavourite(Request $request, User $user): JsonResponse
    {
        $authUser = $request->user();

        $raw = Favourite::query()
            ->where('user_id', $authUser->id)
            ->where('model_id', $user->id)
            ->first();

        if ($raw) {
            $raw->delete();
            return response()->json([
                'status' => 'success',
                'data' => 'Убрано из избранного'
            ]);
        } else {
            return response()->json([
                'status' => 'not found in favourites',
            ]);
        }

    }
}
