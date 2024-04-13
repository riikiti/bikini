<?php

namespace App\Http\Resources;

use App\Models\Contest;
use App\Models\ContestModel;
use App\Models\Favourite;
use App\Models\User;
use App\Models\WinnerList;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WinnerResource extends JsonResource
{
    private string $appUrl;

    public function toArray(Request $request): array
    {
        $contest = ContestModel::query()->where('id', $this->contest_id)->first();

        return [
            'place' => $this->place,
            'contest' => $contest,
        ];
    }

}
