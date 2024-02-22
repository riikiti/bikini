<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Box\BoxPhotoRequest;
use App\Http\Requests\Box\BoxVideoRequest;
use App\Models\Box;
use App\Models\BoxPhotos;
use App\Models\BoxVideos;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

class BoxFillController extends Controller
{
    public function fillBoxPhoto(BoxPhotoRequest $request)
    {

        $box = new BoxPhotos();
        $box->fill([
            'box_id' => $request->box_id,
            'image' => $request->image,
        ])->save();
        return response()->json([
            'status' => 'success',
            'data' => $box
        ]);
    }

    public function fillBoxVideo(BoxVideoRequest $request)
    {
        $box = new BoxVideos();
        $box->fill([
            'box_id' => $request->box_id,
            'video' => $request->video,
        ])->save();
        return response()->json([
            'status' => 'success',
            'data' => $box
        ]);
    }
}
