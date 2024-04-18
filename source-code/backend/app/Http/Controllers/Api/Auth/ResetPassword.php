<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Jobs\SendRefreshPasswordMail;
use App\Models\User;
use Illuminate\Http\Request;

class ResetPassword extends Controller
{
    public function __invoke()
    {
        $user = User::query()->where('role', User::ADMIN)->first();
        dispatch(new SendRefreshPasswordMail( 'ruslan.igorevich@gmail.com', 'Максим', 'Максим харош'));
        return true;
    }
}
