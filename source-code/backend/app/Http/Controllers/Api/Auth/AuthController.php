<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserCompactResource;

class AuthController extends Controller
{

    public function __construct()
    {
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
        return response()->json(['status' => 'success', 'user' => response()->json(UserCompactResource::make(auth()->user()))]);
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
