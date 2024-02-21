<?php

namespace App\Http\Resources\Blog;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
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
            'description' => $this->description,
            'photo' => $this->photos ? BlogPhotoResource::collection($this->photos) : null,
            'videos' => $this->videos ? BlogVideoResource::collection($this->videos) : null,
            'created' => $this->created_at,
            'is_published' => $this->is_published
        ];
    }
}
