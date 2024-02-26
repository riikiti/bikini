<?php

namespace App\Http\Controllers\Api\Pages;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserCompactResource;
use App\Models\User;
use Illuminate\Http\Request;

class ModelsPageController extends Controller
{
    public function getAll()
    {
        $models = User::query()
            ->where('role',User::MODEL)
            ->get();

        return response()->json([
            'status' => 'success',
            'data' => UserCompactResource::collection($models)]);
    }
}
