<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContestModelsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'contest_id' => $this->contest_id,
            'user_id' => $this->user_id,
            'photo' => $this->photo,
            'freeRating' => $this->freeRating,
            'additionalFreeRating' => $this->additionalFreeRating,
            'paidRating' => $this->paidRating,
        ];
    }
}
