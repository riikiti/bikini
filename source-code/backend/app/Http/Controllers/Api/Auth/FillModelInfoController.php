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

    private User $user;

    public function update(FillModelInfoRequest $request, User $user)
    {
        $this->user = $user;
        $data = [];
        match ($user->role) {
            User::MODEL => $this->fillModelInfo($data, $request),
            User::USER => $this->fillUserInfo($request),
            User::ADMIN => $data = null,
        };
        return response()->json(['status' => 'success', 'data' => UserResource::make($this->user)]);
    }


    public function fillUserInfo( FillModelInfoRequest $request)
    {
        $this->user->fill([
            'country' => $request->country_id,
            'avatar' => $request->avatar,
        ])->save();

    }
    public function fillModelInfo(array &$fields, FillModelInfoRequest $request)
    {
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
            'about' => $request->about,
        ];

        $this->user->fill([
            'country' => $request->country_id,
            'avatar' => $request->avatar,
            'fields' => $fields,
        ])->save();
    }
}
