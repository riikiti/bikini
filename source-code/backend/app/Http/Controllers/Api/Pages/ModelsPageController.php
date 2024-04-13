<?php

namespace App\Http\Controllers\Api\Pages;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserCompactRatingResource;
use App\Http\Resources\UserCompactResource;
use App\Models\Favourite;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ModelsPageController extends Controller
{
    public function getAll(Request $request): JsonResponse
    {
        $models = User::query()
            ->where('role', User::MODEL)
            ->get();

        return response()->json([
            'status' => 'success',
            'data' => UserCompactRatingResource::collection($models),
        ]);
    }

    public function getFavorites(): JsonResponse
    {
        $favorites = Favourite::query()
            ->where('user_id', auth()->user()->id)
            ->get('model_id')->toArray();

        $data = [];
        foreach ($favorites as $favorite) {
            $data[] = User::query()->where('id', $favorite)->first();
        }
        return response()->json(UserCompactResource::collection($data));
    }
}
