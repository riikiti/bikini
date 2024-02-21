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
    private string $msg;

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function update(FillModelInfoRequest $request, User $user)
    {
        $this->msg = 'success';
        $this->user = $user;
        $data = [];
        $this->refreshPassword($request);
        match ($user->role) {
            User::MODEL => $this->fillModelInfo($data, $request),
            User::USER => $this->fillUserInfo($request),
            User::ADMIN => $data = null,
        };
        return response()->json(['status' => $this->msg, 'data' => UserResource::make($this->user)]);
    }


    public function fillUserInfo(FillModelInfoRequest $request)
    {
        $this->user->fill([
            'country_id' => $request->country_id,
            'avatar' => $request->avatar,
        ])->save();
    }

    public function fillModelInfo(array &$fields, FillModelInfoRequest $request)
    {

        $messages = [
            'from_subscribers' => $request->from_subscribers,
            'from_all_models' => $request->from_all_models,
            'from_all_fans' => $request->from_all_fans,
            'from_all_users' => $request->from_all_users,
            'from_no_one' => $request->from_no_one
        ];

        $fields = [
            'birthdate' => $request->birthdate,
            'height' => $request->height,
            'weight' => $request->weight,
            'size' => $request->size,
            'waist' => $request->waist,
            'hips' => $request->hips,
            'city' => $request->city,
            'about' => $request->about,
            'messages_status' => $messages,
        ];

        $this->user->fill([
            'country_id' => $request->country,
            'hair_id' => $request->hair_color,
            'breast_id' => $request->breast,
            'avatar' => $request->avatar,
            'fields' => $fields,
        ])->save();
    }

    public function refreshPassword(FillModelInfoRequest $request)
    {
        if (!empty($request->new_password && $request->new_password == $request->new_password_confirmed)) {
            $this->user->fill(['password' => Hash::make($request->new_password)]);
            $this->msg = 'password changed';
        }
    }
}
