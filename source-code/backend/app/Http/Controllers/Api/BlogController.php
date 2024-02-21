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
    public function show(Request $request, $id)
    {

        $user = $request->user();

        $checkDate = Carbon::now()->addMonths(1);

        $userBlog = BlogUsers::query()
            ->where('user_id', $user->id)
            ->where('blog_id', $id)
            ->where('created_at','>',Carbon::now())
            ->where('created_at','<', $checkDate)
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
