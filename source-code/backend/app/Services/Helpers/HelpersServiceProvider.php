<?php

namespace App\Services\Helpers;

use App\Services\Helpers\Files\FilesHelper;
use App\Services\Helpers\Files\FilesHelperService;
use App\Services\Helpers\Images\ImageHelper;
use App\Services\Helpers\Images\ImageHelperService;
use App\Services\Helpers\Payment\PaymentHelper;
use App\Services\Helpers\Payment\PaymentHelperService;
use Illuminate\Support\ServiceProvider;

class HelpersServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ImageHelperService::class, ImageHelper::class);
        $this->app->bind(FilesHelperService::class, FilesHelper::class);
        $this->app->bind(PaymentHelperService::class, PaymentHelper::class);
    }
}
