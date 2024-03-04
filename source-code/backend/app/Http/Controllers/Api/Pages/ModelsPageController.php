<?php

namespace App\Http\Controllers\Api\Pages;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserCompactResource;
use App\Models\User;
use Illuminate\Http\Request;

class ModelsPageController extends Controller
{
    public function getAll(Request $request)
    {
        $check = $this->checkService->checkUser($request);

        $models = User::query()
            ->where('role',User::MODEL)
            ->get();

        if($check)
        {
            return response()->json([
                'status' => 'profile is not approved',
                'check' => $check
            ]);
        }else{
            return response()->json([
                'status' => 'success',
                'data' => UserCompactResource::collection($models),
                'check' => $check
            ]);
        }

    }
}
