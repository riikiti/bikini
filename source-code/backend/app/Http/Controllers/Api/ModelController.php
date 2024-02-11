<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ModelResource;
use App\Models\Model;
use Illuminate\Http\Request;

class ModelController extends Controller
{
 public function index(){
     return ModelResource::make(Model::query()->first());
 }
}
