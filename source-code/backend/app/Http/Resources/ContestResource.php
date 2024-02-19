<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContestResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'start' => $this->date_start,
            'finish' => $this->date_finish,
            'active' => $this->is_active,
            'prizes' => PrizesResource::collection($this->prizes),
        ];
    }
}
