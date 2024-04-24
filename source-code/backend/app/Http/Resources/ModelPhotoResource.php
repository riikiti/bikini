<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Intervention\Image\Laravel\Facades\Image;

class ModelPhotoResource extends JsonResource
{
    private string $appUrl;

    public function toArray(Request $request): array
    {
        $this->appUrl = config('app.url');
        return [
            'photo' => Image::read("$this->image ? $this->appUrl.'/storage/'.$this->image : null"),
        ];
    }
}
