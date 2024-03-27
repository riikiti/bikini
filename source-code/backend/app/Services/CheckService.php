<?php

namespace App\Services;

use App\Enum\ModelActiveStatusEnum;
use App\Models\ModelPhoto;
use App\Models\User;
use Illuminate\Http\Request;

class CheckService
{

    public function checkUser(Request $request): array
    {
        $user = $request->user();
        $flag = false;
        $check = [];

       /* if (!$user->approved) {
            $flag = true;
            $check[] = [
                'answer_1' => ModelActiveStatusEnum::NOT_CONFIRMED_MODERATOR,
            ];
        }

        $photos = ModelPhoto::query()->where('user_id', $user->id)->first();
        if ($photos == null && $user->role == User::MODEL) {
            $flag = true;
            $check[] = [
                'answer_2' => ModelActiveStatusEnum::NOT_FILLED_PORTFOLIO,
            ];
        }

        if (!$user->fieldsAreFilled() && $user->role == User::MODEL) {
            $flag = true;
            $check[] = [
                'answer_3' => ModelActiveStatusEnum::NOT_FILLED_IN ,
            ];
        }
        if ($flag){
            $check[] = [
                'title' => 'Ваш профиль неактивен. Причины:',
            ];
        }*/

        return $check;
    }
}
