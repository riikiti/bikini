<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Blog\BlogResource;
use App\Models\Blog;
use App\Models\BlogUsers;
use App\Models\User;
use Illuminate\Http\Request;
use Carbon\Carbon;

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

    public function show(Request $request, $id)
    {

        $user = $request->user();

        $checkDate = Carbon::now()->addMonths(1);

        $userBlog = BlogUsers::query()
            ->where('user_id', $user->id)
            ->where('blog_id', $id)
            ->where('created_at', '>', Carbon::now())
            ->where('created_at', '<', $checkDate)
            ->exists();

        if ($userBlog) {
            $blog = Blog::query()->where('id', $id)->first();

            if (!empty($blog)) {
                return response()->json(['status' => 'success', 'data' => BlogResource::make($blog)]);
            } else {
                return response()->json(['status' => 'not found']);
            }
        } else {
            return response()->json(['status' => 'permission denied']);
        }

    }

    public function getAll(User $user)
    {
        $BlogsOfModel = Blog::query()->where('user_id', $user->id)->get();
        return BlogResource::collection($BlogsOfModel);
    }
}
