<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Box\BoxCompactResource;
use App\Http\Resources\Box\BoxResource;
use App\Http\Resources\ContestModelsResource;
use App\Http\Resources\ModelPhotoResource;
use App\Http\Resources\UserCompactResource;
use App\Http\Resources\UserResource;
use App\Models\Contest;
use App\Models\ContestModel;
use App\Models\ModelPhoto;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function index()
    {
        return response()->json([
            'status' => 'success',
            'data' => UserCompactResource::collection(
                User::query()
                    ->where('role', User::MODEL)
                    ->get())]);
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
            $contest = Contest::query()->where('is_active', true)->first();

            $model = ContestModel::query()
                ->where('contest_id', $contest->id)
                ->where('user_id', $user->id)
                ->exists();
            if ($model) {
                $model = ContestModel::query()
                    ->where('contest_id', $contest->id)
                    ->where('user_id', $user->id)
                    ->first();
                return response()->json([
                    'status' => 'success',
                    'data' => [
                        'user' => UserResource::make($user),
                        'contest_photo' => ContestModelsResource::make($model)
                    ],]);
            } else {
                return response()->json([
                    'status' => 'success',
                    'data' => UserResource::make($user),
                ]);
            }
        }


    }

    public function addPhoto(Request $request): JsonResponse
    {
        $data = $request->validate([
            'description' => 'nullable'
        ]);
        $data = [
            'image' => Storage::disk('public')->put('/public/ModelPhotos', $request->file('image')),
            'description' => $data['description'],
            'user_id' => auth()->user()->id,
        ];

        return response()->json([
            'status' => 'ok',
            'model_photo' => ModelPhotoResource::make(ModelPhoto::create($data))
        ]);


    }

    public function showModelPhoto(Request $request, User $user)
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

    public function showModelBoxes(Request $request, User $user)
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
