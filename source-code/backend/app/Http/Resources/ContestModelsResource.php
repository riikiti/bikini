<?php

namespace App\Http\Resources;

use App\Models\Statistic;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContestModelsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    private string $appUrl;

    public function toArray(Request $request): array
    {
        $this->appUrl = config('app.url');
        $check = Statistic::query()
            ->where('user_id', auth()->user()->id)
            ->where('model_id', $this->user_id)
            ->where('type', 1)->exists();
        return [
            'user' => UserCompactCompactResource::make(User::find($this->user_id)),
            'photo' => $this->photo ? $this->appUrl . '/storage/' . $this->photo : null,
            'rating' => $this->freeRating + $this->additionalFreeRating + $this->paidRating,
            'is_free_payment' => $check,
        ];
    }
}
