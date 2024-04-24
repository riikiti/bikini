<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Intervention\Image\Laravel\Facades\Image;

class UserMessageResource extends JsonResource
{
    private string $appUrl;

    public function toArray(Request $request): array
    {
        $this->appUrl = config('app.url');

        return [
            'id' => $this->id,
            'name' => $this->name,
            'avatar' => Image::read("$this->avatar ? $this->appUrl . '/storage/' . $this->avatar : null"),
        ];
    }
}

