<?php

namespace App\Http\Resources;

use App\Models\Contest;
use App\Models\ContestModel;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserStatisticResource extends JsonResource
{
    private string $appUrl;

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
        ];
    }
}
