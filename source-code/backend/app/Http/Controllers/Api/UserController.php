<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return response()->json(['status' => 'success', 'data' => UserResource::collection(User::all())]);
    }

    public function show($id)
    {
        $user = User::query()->where('id', $id)->first();
        if (!empty($user)) {
            return response()->json(['status' => 'success', 'data' => UserResource::make($user)]);
        } else {
            return response()->json(['status' => 'not found']);
        }
    }
}
