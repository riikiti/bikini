<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserCompactResource extends JsonResource
{
    private string $appUrl;
    public function toArray(Request $request): array
    {
        $this->appUrl = config('app.url');
        return [
            'id'=>$this->id,
            'name' => $this->name,
            'avatar' => $this->avatar ? $this->appUrl . '/storage/' . $this->avatar : null,
            'country' => CountryResurce::make($this->country),
        ];
    }
}
