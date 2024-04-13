<?php

use App\Enum\PaymentStatusEnum;
use App\Http\Controllers\Api\ApplicationController;
use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\Auth\FillModelInfoController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\BlogFillController;
use App\Http\Controllers\Api\BoxController;
use App\Http\Controllers\Api\BoxFillController;
use App\Http\Controllers\Api\FavouriteController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Controllers\Api\ModelController;
use App\Http\Controllers\Api\Pages\ContestController;
use App\Http\Controllers\Api\Pages\MainPageController;
use App\Http\Controllers\Api\Pages\ModelsPageController;
use App\Http\Controllers\Api\Pages\StatisticController;
use App\Http\Controllers\Api\Pages\WinnersController;
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\PropertyController;
use App\Http\Controllers\Api\UserController;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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
    Route::post('me', [AuthController::class, 'me']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('register', [RegisterController::class, 'register'])->withoutMiddleware('api');
    Route::post('fill', [FillModelInfoController::class, 'update']);
    Route::get('/statistic', [StatisticController::class, 'index']);
    Route::group(['middleware' =>'jwt.auth'],function (){

        Route::apiResource('user', UserController::class)->only('index', 'show');

        Route::get('/main', [MainPageController::class, 'index']);
        Route::get('/models', [ModelsPageController::class, 'getAll']);

        Route::post('/gallery-photo', [UserController::class, 'addPhoto']);

        Route::get('/model-photos/{user}', [UserController::class, 'showModelPhoto']);

        Route::get('/model-boxes/{user}', [UserController::class, 'showModelBoxes']);

        Route::post('/box-photo', [BoxFillController::class, 'fillBoxPhoto']);
        Route::post('/box-video', [BoxFillController::class, 'fillBoxVideo']);
        Route::post('/blog-photo', [BlogFillController::class, 'fillBlogPhoto']);
        Route::post('/blog-video', [BlogFillController::class, 'fillBlogVideo']);

        Route::get('/contest', [ContestController::class, 'index']);
        Route::get('/active-contest', [ContestController::class, 'show']);
        Route::get('/active-contest/prize-block', [ContestController::class, 'prizesBlock']);
        Route::get('/active-contest/model-block', [ContestController::class, 'modelBlock']);

        Route::post('/active-contest/add-photo', [ContestController::class, 'addPhoto']);
        Route::post('/active-contest/update-photo', [ContestController::class, 'updatePhoto']);
        Route::delete('/active-contest/delete-photo', [ContestController::class, 'deletePhoto']);

        Route::get('/active-contest/all-publications-block', [ContestController::class, 'allContestPublicationsBlock']);
        Route::get('/active-contest/winners-list', [ContestController::class, 'winnersList']);

        Route::get('/winners', [WinnersController::class, 'index']);


        Route::post('/favourite/{user}', [FavouriteController::class, 'addToFavourite']);
        Route::delete('/favourite/{user}', [FavouriteController::class, 'removeFromFavourite']);
        Route::get('/user-favorites', [ModelsPageController::class, 'getFavorites']);

        Route::get('/box/{id}', [BoxController::class, 'show']);
        Route::post('/box-pay/{id}', [BoxController::class, 'payment']);
        Route::get('/boxes/{user}', [BoxController::class, 'getAll']);

        Route::post('/blog-pay/{user}', [BlogController::class, 'payment']);
        Route::get('/blogs/{user}', [BlogController::class, 'getAll']);

        Route::get('/property', [PropertyController::class, 'index']);
        Route::post('/payment/callback', [PaymentController::class, 'callback'])->name('payment.callback');

        Route::get('/application', ApplicationController::class);


        Route::group(['middleware' => 'api', 'prefix' => 'messenger'], function () {
            Route::get('/messages/{user}', [MessageController::class, 'index']);
            Route::get('/messages', [MessageController::class, 'getAll']);
            Route::post('/messages/{user}', [MessageController::class, 'store']);
        });

        Route::post('/payment/create', [PaymentController::class, 'create']);
    });

});




/*Route::post('/payment/callback', function (Request $request) {
    $paymentId = $request->input('metadata.transaction_id');
    $status = $request->input('status');
    Log::channel('sms')->info($request->input('metadata.transaction_id'));
    // Find the payment object in your database using the payment_id
    $payment = Transaction::find($paymentId);
    if ($payment) {
        $payment->status = PaymentStatusEnum::FAILED->value;
        $payment->save();
        if ($status === 'succeeded') {
            $payment->status = PaymentStatusEnum::CONFIRM->value;
            $payment->save();
        } elseif ($status === 'failed') {
            $payment->status = PaymentStatusEnum::FAILED->value;
            $payment->save();
        }
    }

    // Return a response to YooKassa
    return response()->json(['status' => 'ok']);
});*/
