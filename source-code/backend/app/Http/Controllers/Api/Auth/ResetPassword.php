<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Jobs\SendRefreshPasswordMail;
use App\Models\User;
use Illuminate\Http\Request;

class ResetPassword extends Controller
{
    public function __invoke(Request $request)
    {
        //todo hash id of email send
        dispatch(new SendRefreshPasswordMail(User::query()->where('email', $request->email)->first()));
        return response()->json(['status' => true, 'message' => 'mail send']);
    }
}
