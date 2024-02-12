<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ModelPhotoResource extends JsonResource
{
    private string $appUrl;

    public function toArray(Request $request): array
    {
        $this->appUrl = config('app.url');
        return [
            'photo' => $this->photo ? $this->appUrl.'/storage/'.$this->photo : null,
            'description' => $this->description
        ];
    }
}
