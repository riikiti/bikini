<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Box\BoxCompactResource;
use App\Http\Resources\Box\BoxResource;
use App\Models\Box;
use App\Models\BoxUsers;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BoxController extends Controller
{
    public function payment(Request $request, $id): JsonResponse
    {
        //находим юзера
        $user = $request->user();
        //указывем что записать и откуда взять
        $data = ['user_id' => $user->id, 'box_id' => $id,];
        //проверка на наличие оплаты уже
        $isBoxUser = BoxUsers::query()
            ->where('user_id', $user->id)
            ->where('box_id', $id)
            ->exists();
        //проверка на наличие бокса
        $isBox = Box::query()
            ->where('id',$id)
            ->exists();

        if($isBox)
        {
            if ($isBoxUser) {
                return response()->json(['status' => 'Payment already exists']);
            } else {
                BoxUsers::create($data);
                return response()->json(['status' => 'ок', 'data' => $data]);
            }

        } else {
            return response()->json(['status' => 'boxing doesnt exist']);
        }
    }

    public function show(Request $request, $id)
    {
        $user = $request->user();

        $userBox = BoxUsers::query()
            ->where('user_id', $user->id)
            ->where('box_id', $id)
            ->exists();

        if ($userBox) {
            $box = Box::query()->where('id', $id)->first();
            if (!empty($box)) {
                return response()->json(['status' => 'success', 'data' => BoxResource::make($box)]);
            } else {
                return response()->json(['status' => 'not found']);
            }
        } else {
            return response()->json(['status' => 'permission denied']);
        }

    }

    public function getAll(User $user)
    {
        // Нужно отдавать список с оплаченные неоплаченные
        $BoxesOfModel = Box::query()->where('user_id', $user->id)->get();
        return BoxCompactResource::collection($BoxesOfModel);
    }
}
