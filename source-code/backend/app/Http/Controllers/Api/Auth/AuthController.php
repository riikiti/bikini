<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserCompactResource;
use App\Models\User;
use App\Services\CheckService;
use Illuminate\Http\Request;


class AuthController extends Controller
{
    public function __construct(CheckService $service)
    {
        $this->checkService = $service;
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = ([
            'email' => $request->email,
            'password' => $request->password
        ]);
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return response()->json(['status' => 'success', 'token' => $this->respondWithToken($token)]);
    }


    public function me()
    {
        // короче я проверял на других роутах такая запись работает, тут не хочет
        $check = $this->checkService->checkUser(auth()->user());
        if ($check) {
            return response()->json([
                'status' => 'profile is not approved',
                'user' => response()->json(UserCompactResource::make(auth()->user())),
                'check' => $check,
            ]);
        } else {
            return response()->json(
                ['status' => 'success', 'user' => response()->json(UserCompactResource::make(auth()->user()))]
            );
        }
    }


    public function logout()
    {
        auth()->logout();
        return response()->json(['status' => 'Successfully logged out']);
    }


    public function refresh()
    {
        return response()->json(['status' => 'success', 'token' => $this->respondWithToken(auth()->refresh())]);
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
