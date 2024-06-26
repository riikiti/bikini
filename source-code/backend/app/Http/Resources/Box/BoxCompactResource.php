<?php

namespace App\Http\Resources\Box;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BoxCompactResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'price' => $this->price,
            'photo' => $this->photos ? BoxPhotoResource::collection($this->photos) : null,
            'created' => $this->created,
            'is_published' => $this->is_published
        ];
    }
}
