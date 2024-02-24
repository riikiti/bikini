<?php

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\Auth\FillModelInfoController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\BlogFillController;
use App\Http\Controllers\Api\BoxController;
use App\Http\Controllers\Api\BoxFillController;
use App\Http\Controllers\Api\ContestController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Controllers\Api\ModelController;
use App\Http\Controllers\Api\Pages\MainPageController;
use App\Http\Controllers\Api\PropertyController;
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


Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
    Route::post('register', [RegisterController::class, 'register'])->withoutMiddleware('api');
    Route::post('fill/{user}', [FillModelInfoController::class, 'update']);
});

Route::apiResource('user', UserController::class)->only('index', 'show');

Route::get('/main', [MainPageController::class, 'index']);
Route::get('/model-photos/{user}', [UserController::class, 'showModelPhoto']);
Route::get('/model-boxes/{user}', [UserController::class, 'showModelBoxes']);
Route::post('/box-photo', [BoxFillController::class, 'fillBoxPhoto']);
Route::post('/box-video', [BoxFillController::class, 'fillBoxVideo']);

Route::post('/blog-photo', [BlogFillController::class, 'fillBlogPhoto']);
Route::post('/blog-video', [BlogFillController::class, 'fillBlogVideo']);

Route::get('/contest', [ContestController::class, 'index']);
Route::get('/active-contest', [ContestController::class, 'show']);
Route::post('/active-contest', [ContestController::class, 'store']);
Route::patch('/active-contest', [ContestController::class, 'update']);

Route::get('/box/{id}', [BoxController::class, 'show']);
Route::post('/box-pay/{id}', [BoxController::class, 'payment']);
Route::get('/boxes/{user}', [BoxController::class, 'getAll']);

Route::get('/blog/{id}', [BlogController::class, 'show']);
Route::get('/blogs/{user}', [BlogController::class, 'getAll']);

Route::get('/property', [PropertyController::class, 'index']);


Route::group(['middleware' => 'api', 'prefix' => 'messenger'], function () {
    Route::get('/messages/{user}', [MessageController::class, 'index']);
    Route::get('/messages', [MessageController::class, 'getAll']);
    Route::post('/messages', [MessageController::class, 'store']);
});

