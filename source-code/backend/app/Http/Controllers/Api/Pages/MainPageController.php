<?php

namespace App\Http\Controllers\Api\Pages;

use App\Http\Controllers\Controller;
use App\Http\Resources\Pages\MainPageResource;
use App\Models\Pages\MainPage\MainPage;
use Illuminate\Http\Request;

class MainPageController extends Controller
{
    public function index(){
        return response()->json(['status' => 'success', 'data' => MainPageResource::make(MainPage::first())]);
    }
}
