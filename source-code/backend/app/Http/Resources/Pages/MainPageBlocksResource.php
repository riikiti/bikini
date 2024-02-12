<?php

namespace App\Http\Resources\Pages;

use App\Enum\MainPageEnum;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MainPageBlocksResource extends JsonResource
{
    private string $appUrl;

    public function toArray(Request $request): array
    {
        $this->appUrl = config('app.url');
        $data = [];
        match ($this->key) {
            MainPageEnum::SUB_HEADER->value => $this->initSubHeaderBlock($data),
            MainPageEnum::VOTES->value => $this->initCommonBlock($data),
            MainPageEnum::INFO->value => $this->initInfoBlock($data),
            MainPageEnum::WINNERS->value => $this->initCommonBlock($data),
        };
        return $data;
    }

    public function initSubHeaderBlock(array &$data): void
    {
        $data['title'] = $this->title;
        $data['description'] = $this->description;
    }

    public function initCommonBlock(array &$data): void
    {
        $data['title'] = $this->title;
        $data['description'] = $this->description;
        $data['button_name'] = $this->button_name;
        $data['link'] = $this->link;
    }

    public function initInfoBlock(array &$data): void
    {
        $data['description'] = $this->description;
        $data['image'] = $this->image ? $this->appUrl . '/storage/' . $this->image : null;
    }

}
