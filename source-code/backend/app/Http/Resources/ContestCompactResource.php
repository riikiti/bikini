<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Intervention\Image\Laravel\Facades\Image;

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
            'avatar' => Image::read("$this->avatar ? $this->appUrl . '/storage/' . $this->avatar : null"),
            'photo' => Image::read("$this->photo ? $this->appUrl . '/storage/ContestPhotos/' . $this->photo : null"),
        ];
    }
}
