<?php

namespace App\Http\Resources\Box;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BoxPhotoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'image'=>$this->image,
            'description'=>$this->description
        ];
    }
}
