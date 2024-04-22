<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\FillNewPasswordRequest;
use App\Models\User;
use Illuminate\Http\Request;

class FillNewPasswordController extends Controller
{
    public function __invoke(FillNewPasswordRequest $request)
    {
        $user = User::query()->where('id', $request->id)->first();
        $user->fill(['password' => $request->password])->save();
        return response()->json(['status' => 'success', 'message' => 'password change successfully']);
    }
}
