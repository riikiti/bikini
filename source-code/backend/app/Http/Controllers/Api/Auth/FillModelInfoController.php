<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\FillModelInfoRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class FillModelInfoController extends Controller
{

    private User $user;
    private string $msg;

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function update(FillModelInfoRequest $request)
    {
        $this->user = $request->user();
        $this->msg = 'success';
        $data = [];
        $this->refreshPassword($request);
        match ($this->user->role) {
            User::MODEL => $this->fillModelInfo($data, $request),
            User::USER => $this->fillUserInfo($request),
            User::ADMIN => $data = null,
        };
        return response()->json(['status' => $this->msg, 'data' => UserResource::make($this->user)]);
    }


    public function fillUserInfo(FillModelInfoRequest $request)
    {
        if ($request->avatar) {
            $this->user->fill([

                $name = md5(Carbon::now()) . '_' . $request->avatar->getClientOriginalName(),
                $path = Storage::disk('public')->putFileAs('images', $request->avatar, $name),
                'avatar' => $path,
            ]);
        }

        $this->user->fill([
            'country_id' => $request->country_id,
        ])->save();
    }

    public function fillModelInfo(array &$fields, FillModelInfoRequest $request)
    {
        if ($request->hasFile('avatar')) {
            $this->user->fill([
                'avatar' => Storage::disk('public')->put('/avatars', $request->file('avatar')),
            ]);
        } else {
            $this->user->fill([
                'avatar' => Storage::disk('public')->put('/avatars', $request->file('avatar')),
            ]);
            $fields = [
                'birthdate' => $request->birthdate,
                'height' => $request->height,
                'weight' => $request->weight,
                'size' => $request->size,
                'waist' => $request->waist,
                'hips' => $request->hips,
                'city' => $request->city,
                'about' => $request->about,
                'messages_status' => [
                    'from_subscribers' => $request->messages_status['from_subscribers'] ?? null,
                    'from_all_models' => $request->messages_status['from_all_models'] ?? null,
                    'from_all_fans' => $request->messages_status['from_all_fans'] ?? null,
                    'from_all_users' => $request->messages_status['from_all_users'] ?? null,
                    'from_no_one' => $request->messages_status['from_no_one'] ?? null
                ],
            ];
            $this->user->fill([
                'country_id' => $request->country,
                'hair_id' => $request->hair_color,
                'breast_id' => $request->breast,
                'fields' => $fields,
            ])->save();
        }
    }

    public function refreshPassword(FillModelInfoRequest $request)
    {
        if (!empty($request->new_password && $request->new_password == $request->new_password_confirmed)) {
            $this->user->fill(['password' => Hash::make($request->new_password)]);
            $this->msg = 'password changed';
        }
    }
}
