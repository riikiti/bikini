<?php

namespace App\Http\Controllers\Api\Auth;

use App\Events\SendMessageEvent;
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
        $this->user->fill($request->validated())->save();
        if (!$token = auth()->tokenById($this->user->id)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $user = $this->user;
        event(new SendMessageEvent($user));
        return response()->json(['status' => 'success', 'token' => $this->respondWithToken($token)]);
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
