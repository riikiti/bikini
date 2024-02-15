<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    private User $user;

    public function __construct()
    {
        $this->user = new User();
    }

    public function register(RegisterRequest $request)
    {
        match ($request->role) {
            User::USER => $this->user->fill($request->validated())->save(),
            User::MODEL => $this->fillModelFields($request),
        };
        if (!$token = auth()->tokenById($this->user->id)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return response()->json(['status' => 'success', 'token' => $this->respondWithToken($token)]);
    }

    public function fillModelFields($request)
    {
        $fields = [
            'birthdate' => $request->birthdate,
            'height' => $request->height,
            'weight' => $request->weight,
            'size' => $request->size,
            'waist' => $request->waist,
            'hips' => $request->hips,
            'city' => $request->city,
            'avatar' => $request->avatar,
            'about' => $request->about,
            'active' => $request->active,
        ];

        $this->user->fill([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'fields' => $fields,
        ])->save();

    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
