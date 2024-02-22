<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Box\BoxPhotoRequest;
use App\Http\Requests\Box\BoxVideoRequest;
use App\Models\Box;
use App\Models\BoxPhotos;

class BoxFillController extends Controller
{
    public function fillBoxPhoto(BoxPhotoRequest $request)
    {
        $data = $request->validated();
        $box = new BoxPhotos();
        $box->fill([
            'box_id' => $data['box_id'],
            'image' => $data['image'],
        ])->save();
        return response()->json([
            'status' => 'success',
            'data' => $box
        ]);
    }

    public function fillBoxVideo(BoxVideoRequest $request)
    {

    }
}
