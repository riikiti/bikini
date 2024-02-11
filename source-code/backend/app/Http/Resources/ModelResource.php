<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ModelResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'email' => $this->email,
            'birthdate'=>$this->birthdate,
            'height'=>$this->height,
            'weight'=>$this->weight,
            'hair_color'=>$this->hair_color,
            'size'=>$this->size,
            'breast'=>$this->breast,
            'waist'=>$this->waist,
            'hips'=>$this->hips,
            'country'=>$this->country,
            'city'=>$this->city,
            'avatar'=>$this->avatar,
            'about'=>$this->about,
            'approved'=>$this->approved,
            'active'=>$this->active,
            'photos' => ModelPhotoResource::collection($this->photos)
        ];
    }
}
