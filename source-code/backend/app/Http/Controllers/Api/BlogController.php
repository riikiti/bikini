<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Blog\BlogResource;
use App\Models\Blog;
use App\Models\BlogUsers;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BlogController extends Controller
{

    public function payment(Request $request, User $user)
    {
        //находим юзера
        $subscriber = $request->user();

        //время оплаты + 1 месяц
        $checkDate = Carbon::now()->addMonths(1);

        //указывем что записать и откуда взять
        $data = ['user_id' => $user->id, 'subscriber_id' => $subscriber->id, 'signed_before' => $checkDate];
        //проверка на то что подписка есть и действует в данный момент
        $userBlog = BlogUsers::query()
            ->where('user_id', $user->id)
            ->where('subscriber_id', $subscriber->id)
            ->where('signed_before', '>', Carbon::now())
            ->exists();

        if ($userBlog) {
            return response()->json(['status' => 'Payment already exists']);
        } else {
            BlogUsers::create($data);
            return response()->json(['status' => 'ок', 'data' => $data]);
        }
    }


    public function getAll(Request $request, User $user)
    {
        $subscriber = $request->user();

        $userBlog = BlogUsers::query()
            ->where('user_id', $user->id)
            ->where('subscriber_id', $subscriber->id)
            ->where('signed_before', '>', Carbon::now())
            ->exists();
        //если есть подписка, выводим всё, иначе ничего
        if ($userBlog) {
            $BlogsOfModel = Blog::query()->where('user_id', $user->id)->get();
            return response()->json(['status' => 'not paid','data' => BlogResource::collection($BlogsOfModel)]);
        } else {
            return response()->json(['status' => 'not paid']);
        }
    }
}
