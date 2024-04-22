<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/workerlog', function () {
    $filePath = 'worker.log';
    if (file_exists($filePath)) {
        ob_start();
        echo '<pre>';
        require($filePath);
        return ob_get_clean();
    } else {
        return "The worker.log file does not exist.";
    }
});

Route::get('/', function () {
    return view('welcome');
});
