<?php

namespace App\Http\Resources;

use App\Http\Resources\Box\BoxResource;
use App\Models\ContestModel;
use App\Models\Favourite;
use App\Models\Property\Breast;
use App\Models\User;
use App\Models\WinnerList;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Intervention\Image\Laravel\Facades\Image;

class UserMeResource extends JsonResource
{
    private string $appUrl;

    public function toArray(Request $request): array
    {
        $this->appUrl = config('app.url');
        $contest = ContestModel::query()->where('user_id', $this->id)->where('isActive', true)->first();
        $favorite = Favourite::query()->where('user_id', auth()->user()->id)->where('model_id', $this->id)->first();
        $isWinner = WinnerList::query()->where('user_id', $this->id)->exists();
        $data = [
            'id' => $this->id,
            'email' => $this->email,
            'name' => $this->name,
            'avatar' => Image::read("$this->avatar ? $this->appUrl . '/storage/' . $this->avatar : null"),
            'created_at' => $this->created,
            'role' => $this->role,
            'country' => CountryResurce::make($this->country),
        ];
        $data['active_contest'] = isset($contest) ? ContestCompactResource::make($contest) : false;
        $data['is_favorite'] = $favorite ?? false;
        $data['is_winner'] = $isWinner;

        if ($this->role == User::MODEL) {
            $this->initModelInfo($data);
        }

        return $data;
    }

    public function initModelInfo(array &$data): array
    {
        $data['info']['birthdate'] = $this->fields ? $this->fields['birthdate'] : null;
        $data['info']['height'] = $this->fields ? $this->fields['height'] : null;
        $data['info']['weight'] = $this->fields ? $this->fields['weight'] : null;
        $data['info']['size'] = $this->fields ? $this->fields['size'] : null;
        $data['info']['waist'] = $this->fields ? $this->fields['waist'] : null;
        $data['info']['hips'] = $this->fields ? $this->fields['hips'] : null;
        $data['info']['city'] = $this->fields ? $this->fields['city'] : null;
        $data['info']['about'] = $this->fields ? $this->fields['about'] : null;
        $data['info']['hair'] = HairColorResurce::make($this->hair);
        $data['info']['breast'] = BreastResurce::make($this->breast);
        $data['info']['messages_status']['from_subscribers'] = $this->fields ? $this->fields['messages_status']['from_subscribers'] : null;
        $data['info']['messages_status']['from_all_models'] = $this->fields ? $this->fields['messages_status']['from_all_models'] : null;
        $data['info']['messages_status']['from_all_fans'] = $this->fields ? $this->fields['messages_status']['from_all_fans'] : null;
        $data['info']['messages_status']['from_all_users'] = $this->fields ? $this->fields['messages_status']['from_all_users'] : null;
        $data['info']['messages_status']['from_no_one'] = $this->fields ? $this->fields['messages_status']['from_no_one'] : null;
        return $data;
    }
}

