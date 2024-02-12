<?php

use App\Http\Controllers\Api\ContestController;
use App\Http\Controllers\Api\ModelController;
use App\Http\Controllers\Api\Pages\MainPageController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiResource('model', ModelController::class)->only('index', 'show');
Route::apiResource('user', UserController::class)->only('index', 'show');
Route::get('/main',[MainPageController::class,'index']);
Route::get('/contest',[ContestController::class,'index']);
Route::get('/active-contest',[ContestController::class,'show']);

