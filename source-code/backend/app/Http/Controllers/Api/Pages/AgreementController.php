<?php

namespace App\Http\Controllers\Api\Pages;

use App\Http\Controllers\Controller;
use App\Http\Resources\Pages\StaticResource;
use App\Models\Pages\Agreement;
use Illuminate\Http\Request;

class AgreementController extends Controller
{
    public function __invoke()
    {
        return StaticResource::collection(Agreement::all());
    }
}
