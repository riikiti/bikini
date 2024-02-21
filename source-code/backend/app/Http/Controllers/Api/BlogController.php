<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Blog\BlogResource;
use App\Models\Blog;
use App\Models\User;

class BlogController extends Controller
{
    public function show($id)
    {
        $blog = Blog::query()->where('id', $id)->first();

        if (!empty($blog)) {
            return response()->json(['status' => 'success', 'data' => BlogResource::make($blog)]);
        } else {
            return response()->json(['status' => 'not found']);
        }
    }

    public function getAll(User $user)
    {
        $BlogsOfModel = Blog::query()->where('user_id', $user->id)->get();
        return BlogResource::collection($BlogsOfModel);
    }
}
