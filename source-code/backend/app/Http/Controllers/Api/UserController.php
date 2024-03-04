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

        if ($check) {
            return response()->json([
                'status' => 'profile is not approved',
                'check' => $check
            ]);
        } else {
            if (!empty($user)) {
                return response()->json(['status' => 'success', 'data' => UserResource::make($user)]);
            } else {
                return response()->json(['status' => 'not found']);
            }
        }


    }

    public function showModelPhoto(Request $request,User $user)
    {
        $check = $this->checkService->checkUser($request);

        if ($check) {
            return response()->json([
                'status' => 'profile is not approved',
                'check' => $check
            ]);
        } else {
            if (!empty($user)) {
                return response()->json(['status' => 'success', 'data' => ModelPhotoResource::collection($user->photos)]);
            } else {
                return response()->json(['status' => 'not found']);
            }
        }


    }

    public function showModelBoxes(Request $request,User $user)
    {
        $check = $this->checkService->checkUser($request);

        if ($check) {
            return response()->json([
                'status' => 'profile is not approved',
                'check' => $check
            ]);
        } else {
            if (!empty($user)) {
                return response()->json(['status' => 'success', 'data' => BoxCompactResource::collection($user->box)]);
            } else {
                return response()->json(['status' => 'not found']);
            }
        }


    }

}
