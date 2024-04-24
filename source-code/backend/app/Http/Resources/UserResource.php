<?php

namespace App\Http\Resources;

use App\Http\Resources\Box\BoxResource;
use App\Models\Property\Breast;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    private string $appUrl;

    public function toArray(Request $request): array
    {
        $this->appUrl = config('app.url');
        $data = [
            'id' => $this->id,
            'email' => $this->email,
            'name' => $this->name,
            'avatar' => $this->avatar ? $this->appUrl . '/storage/' . $this->avatar : null,
            'created_at' => $this->created,
            'role' => $this->role,
            'country' => CountryResurce::make($this->country),
        ];

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

