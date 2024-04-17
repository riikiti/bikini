<?php

namespace App\Http\Controllers\Api\Pages;

use App\Http\Controllers\Controller;
use App\Http\Resources\Pages\StaticResource;
use App\Models\Pages\Agreement;
use App\Models\Pages\Policy;
use App\Models\Pages\Terms;
use Illuminate\Http\Request;

class TermsController extends Controller
{
    public function __invoke()
    {
        return StaticResource::collection(Terms::all());
    }
}
