<?php

namespace App\Http\Resources\Pages;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MainPagePrizesResource extends JsonResource
{
    private string $appUrl;

    public function toArray(Request $request): array
    {
        $this->appUrl = config('app.url');
        return [
            'image' => $this->image ? $this->appUrl . '/storage/' . $this->image : null,
            'text' => $this->text
        ];
    }
}
