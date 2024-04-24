<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContestCompactResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    private string $appUrl;

    public function toArray(Request $request): array
    {
        $this->appUrl = config('app.url');

        return [
            'name' => $this->name,
            'start' => $this->date_start,
            'finish' => $this->date_finish,
            'active' => $this->is_active,
            'rating' => $this->rating,
            'avatar' => $this->avatar ? $this->appUrl . '/storage/' . $this->avatar : null,
            'photo' => $this->photo ? $this->appUrl . '/storage/ContestPhotos/' . $this->photo : null,
        ];
    }
}
