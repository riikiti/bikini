<?php

namespace App\Http\Resources;

use App\Models\Contest;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WinnerResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        $contest = Contest::query()->where('id', $this->contest_id)->first();

        return [
            'place' => $this->place,
            'contest' => $contest->name,
        ];
    }

}
