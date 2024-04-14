<?php

namespace App\Http\Resources;

use App\Models\Contest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WinnerFullResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        $contest = Contest::query()->where('id', $this->contest_id)->first();
        $user = User::find($this->user_id);
        return [
            'place' => $this->place,
            'contest' => $contest->name,
            'user' =>  UserCompactCompactResource::make($user),
        ];
    }

}
