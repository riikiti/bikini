<?php

namespace App\Http\Controllers\Api\Pages;

use App\Http\Controllers\Controller;
use App\Http\Resources\Pages\StaticResource;
use App\Models\Pages\Agreement;
use App\Models\Pages\Policy;
use Illuminate\Http\Request;

class PolicyController extends Controller
{
    public function __invoke()
    {
        return StaticResource::collection(Policy::all());
    }
}
