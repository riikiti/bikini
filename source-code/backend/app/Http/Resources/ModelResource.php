<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ModelResource extends JsonResource
{
    private string $appUrl;

    public function toArray(Request $request): array
    {
        $this->appUrl = config('app.url');
        return [
            'email' => $this->email,
            'birthdate' => $this->birthdate,
            'height' => $this->height,
            'weight' => $this->weight,
            'hair_color' => $this->hair_color,
            'size' => $this->size,
            'breast' => $this->breast,
            'waist' => $this->waist,
            'hips' => $this->hips,
            'country' => $this->country,
            'city' => $this->city,
            'avatar' => $this->avatar ? $this->appUrl . '/storage/' . $this->avatar : null,
            'about' => $this->about,
            'approved' => $this->approved,
            'is_active' => $this->is_active,
            'photos' => ModelPhotoResource::collection($this->photos)
        ];
    }
}
