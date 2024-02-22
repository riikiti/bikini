<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Blog\BlogPhotoRequest;
use App\Http\Requests\Blog\BlogVideoRequest;
use App\Models\BlogPhotos;
use App\Models\BlogVideos;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BlogFillController extends Controller
{
    public function fillBlogPhoto(BlogPhotoRequest $request): JsonResponse
    {
        $blog = new BlogPhotos();
        $blog->fill([
            'blog_id' => $request->blog_id,
            'image' => $request->image,
        ])->save();
        return response()->json([
            'status' => 'success',
            'data' => $blog
        ]);
    }

    public function fillBlogVideo(BlogVideoRequest $request): JsonResponse
    {
        $blog = new BlogVideos();
        $blog->fill([
            'blog_id' => $request->blog_id,
            'video' => $request->video,
        ])->save();
        return response()->json([
            'status' => 'success',
            'data' => $blog
        ]);
    }
}
