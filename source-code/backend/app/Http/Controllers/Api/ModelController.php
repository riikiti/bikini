<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ModelResource;
use App\Models\Model;
use Illuminate\Http\Request;

class ModelController extends Controller
{
    public function index()
    {
        return response()->json(['status' => 'success', 'data' => ModelResource::collection(Model::all())]);
    }

    public function show($id)
    {
        $model = Model::query()->where('id', $id)->first();
        if (!empty($model)) {
            return response()->json(['status' => 'success', 'data' => ModelResource::make($model)]);
        } else {
            return response()->json(['status' => 'not found']);
        }
    }
}
