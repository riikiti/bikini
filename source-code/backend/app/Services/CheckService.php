<?php

namespace App\Services;

use App\Enum\ModelActiveStatusEnum;
use App\Models\ModelPhoto;
use App\Models\User;
use Illuminate\Http\Request;

class CheckService
{

    public function checkUser($user): array
    {
        $check = [];

        if (!$user->approved) {
            $check[] = [
                'title' => ModelActiveStatusEnum::NOT_CONFIRMED_MODERATOR,
                'type' => 'confirm_moderator'
            ];
        }

        $photos = ModelPhoto::query()->where('user_id', $user->id)->first();
        if ($photos == null && $user->role == User::MODEL) {
            $check[] = [
                'title' => ModelActiveStatusEnum::NOT_FILLED_PORTFOLIO,
                'type' => 'portfolio'
            ];
        }

        if (!$user->fieldsAreFilled() && $user->role == User::MODEL) {
            $check[] = [
                'title' => ModelActiveStatusEnum::NOT_FILLED_IN,
                'type' => 'settings'
            ];
        }

        return $check;
    }
}
