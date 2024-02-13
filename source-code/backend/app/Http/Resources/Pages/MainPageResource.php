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

        return [
            'seo'=>[
                'head' => $this->head,
                'seo_title' => $this->seo_title,
                'seo_description' => $this->seo_description,
            ],
            'sub_header' => MainPageBlocksResource::make($this->sub_header),
            'prizes' => PrizesResource::collection(Contest::query()->where('active', true)->first()->prizes),
            'votes' => MainPageBlocksResource::make($this->votes),
            'info' => MainPageBlocksResource::make($this->info),
            'winners' => MainPageBlocksResource::make($this->winners),
        ];
    }


}
