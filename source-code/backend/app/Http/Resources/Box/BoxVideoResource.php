<?php

namespace App\Http\Resources\Box;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BoxVideoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'video' => $this->video,
            'description' => $this->description
        ];
    }
}
