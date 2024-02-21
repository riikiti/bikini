<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Box\BoxResource;
use App\Models\Box;
use App\Models\User;
use Illuminate\Http\Request;

class BoxController extends Controller
{
    public function show(Box $box)
    {
        if (!empty($box)) {
            return response()->json(['status' => 'success', 'data' => BoxResource::make($box)]);
        } else {
            return response()->json(['status' => 'not found']);
        }
    }
}
