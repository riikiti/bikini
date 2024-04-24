<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Intervention\Image\Laravel\Facades\Image;

class PrizesResource extends JsonResource
{
    private string $appUrl;

    public function toArray(Request $request): array
    {
        $this->appUrl = config('app.url');
        return [
            'place' => $this->place,
            'name' => $this->name,
            'description' => $this->description,
            'image' => Image::read("$this->image ? $this->appUrl . '/storage/' . $this->image : null")
        ];
    }
}
