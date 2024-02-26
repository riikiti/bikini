<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Box\BoxCompactResource;
use App\Http\Resources\Box\BoxResource;
use App\Http\Resources\ModelPhotoResource;
use App\Http\Resources\UserCompactResource;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return response()->json(['status' => 'success', 'data' => UserCompactResource::collection(User::query()->where('role', User::MODEL)->get())]);
    }

    public function show(Request $request, User $user)
    {
        $check = $this->checkService->checkUser($request);

        if (!empty($user)) {
            return response()->json(['status' => 'success', 'data' => UserResource::make($user), 'check' => $check]);
        } else {
            return response()->json(['status' => 'not found','check' => $check]);
        }
    }

    public function showModelPhoto(Request $request,User $user)
    {
        $check = $this->checkService->checkUser($request);

        if (!empty($user)) {
            return response()->json(['status' => 'success', 'data' => ModelPhotoResource::collection($user->photos),'check' => $check]);
        } else {
            return response()->json(['status' => 'not found','check' => $check]);
        }
    }

    public function showModelBoxes(Request $request,User $user)
    {
        $check = $this->checkService->checkUser($request);

        if (!empty($user)) {
            return response()->json(['status' => 'success', 'data' => BoxCompactResource::collection($user->box),'check' => $check]);
        } else {
            return response()->json(['status' => 'not found','check' => $check]);
        }
    }

}
