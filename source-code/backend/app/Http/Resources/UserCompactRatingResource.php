<?php

namespace App\Http\Resources;

use App\Models\Contest;
use App\Models\ContestModel;
use App\Models\Favourite;
use App\Models\User;
use App\Models\WinnerList;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserCompactRatingResource extends JsonResource
{
    private string $appUrl;

    public function toArray(Request $request): array
    {
        $contest = Contest::query()->where('is_active', true)->first();
        $contestModel = ContestModel::query()->where('user_id', $this->id)->where('contest_id', $contest->id)->first();
        $this->appUrl = config('app.url');
        $contest = ContestModel::query()->where('user_id', $this->id)->where('isActive', true)->first();
        $favorite = Favourite::query()->where('user_id', auth()->user()->id)->where('model_id', $this->id)->first();
        $isWinner = WinnerList::query()->where('user_id', $this->id)->exists();
        $data = [
            'id' => $this->id,
            'name' => $this->name,
            'avatar' => $this->avatar ? $this->appUrl . '/storage/' . $this->avatar : null,
            'country' => CountryResurce::make($this->country),
        ];
        if ($contestModel) {
            $data['rating'] = ($contestModel->freeRating + $contestModel->additionalFreeRating + $contestModel->paidRating);
        }
        $data['active_contest'] = isset($contest);
        $data['is_favorite'] = isset($favorite);
        $data['is_winner'] = $isWinner;
        if ($this->role == User::MODEL) {
            $this->initModelInfo($data);
        }
        return $data;
    }

//todo избранное и победительницы
    public function initModelInfo(array &$data): array
    {
        $data['info']['messages_status']['from_subscribers'] = $this->fields ? $this->fields['messages_status']['from_subscribers'] : null;
        $data['info']['messages_status']['from_all_models'] = $this->fields ? $this->fields['messages_status']['from_all_models'] : null;
        $data['info']['messages_status']['from_all_fans'] = $this->fields ? $this->fields['messages_status']['from_all_fans'] : null;
        $data['info']['messages_status']['from_all_users'] = $this->fields ? $this->fields['messages_status']['from_all_users'] : null;
        $data['info']['messages_status']['from_no_one'] = $this->fields ? $this->fields['messages_status']['from_no_one'] : null;
        return $data;
    }
}
