<?php

namespace App\Http\Controllers;

use App\Services\CheckService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public CheckService $checkService;

    public function __construct(CheckService $service)
    {
        $this->checkService = $service;
    }
}
