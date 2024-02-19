<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\FillModelInfoRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class FillModelInfoController extends Controller
{

    public function update(FillModelInfoRequest $request, User $user)
    {
        if ($user->role != User::MODEL) {
            return response()->json(['status' => 'error', 'message' => 'didnt model']);
        }

        $fields = [
            'birthdate' => $request->birthdate,
            'height' => $request->height,
            'weight' => $request->weight,
            'hair_color' => $request->hair_color,
            'breast' => $request->breast,
            'size' => $request->size,
            'waist' => $request->waist,
            'hips' => $request->hips,
            'city' => $request->city,
            'avatar' => $request->avatar,
            'about' => $request->about,
        ];
        $user->fill([
            'country' => $request->country_id,
            'fields' => $fields,
        ])->save();

        return response()->json(['status' => 'success', 'data' => UserResource::make($user)]);
    }
}
