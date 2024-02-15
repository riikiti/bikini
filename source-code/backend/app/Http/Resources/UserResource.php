<?php

namespace App\Http\Resources;

use App\Models\Property\Breast;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    private string $appUrl;

    public function toArray(Request $request): array
    {
        $this->appUrl = config('app.url');
        return [
            'email' => $this->email,
            'name' => $this->name,
            'avatar' => $this->avatar ? $this->appUrl . '/storage/' . $this->avatar : null,
            'created_at' => $this->created,
            'country' => CountryResurce::make($this->country),
            'hair' => HairColorResurce::make($this->hair),
            'breast'=>BreastResurce::make($this->breast)
        ];
    }
}
