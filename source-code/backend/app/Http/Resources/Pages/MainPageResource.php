<?php

namespace App\Http\Resources\Pages;

use App\Http\Resources\PrizesResource;
use App\Models\Contest;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MainPageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $contest = Contest::query()->where('is_active', true)->first();
        match (empty($contest)) {
            true => $prizes = null,
            false => $prizes = PrizesResource::collection($contest->prizes),
        };

        return [
            'seo' => [
                'head' => $this->head,
                'seo_title' => $this->seo_title,
                'seo_description' => $this->seo_description,
            ],
            'sub_header' => MainPageBlocksResource::make($this->sub_header),
            'prizes' => $prizes,
            'votes' => MainPageBlocksResource::make($this->votes),
            'info' => MainPageBlocksResource::make($this->info),
            'winners' => MainPageBlocksResource::make($this->winners),
        ];
    }


}
