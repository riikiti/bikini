<?php

namespace App\Http\Resources;

use App\Models\Contest;
use App\Models\ContestModel;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserCompactResource extends JsonResource
{
    private string $appUrl;

    public function toArray(Request $request): array
    {
        $this->appUrl = config('app.url');
        $contest = ContestModel::query()->where('user_id', $this->id)->where('isActive', true)->first();
        $data = [
            'id' => $this->id,
            'name' => $this->name,
            'avatar' => $this->avatar ? $this->appUrl . '/storage/' . $this->avatar : null,
            'country' => CountryResurce::make($this->country),
        ];
        $data['active_contest'] = isset($contest) ? true : false;
        if ($this->role == User::MODEL) {
            $this->initModelInfo($data);
        }
        return [
            $data
        ];
    }


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
