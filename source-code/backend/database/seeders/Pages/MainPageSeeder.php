<?php

namespace Database\Seeders\Pages;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Enum\MainPageEnum;
use App\Models\Pages\MainPage\MainPage;
use App\Models\Pages\MainPage\MainPageBlocks;
use App\Models\Pages\MainPage\MainPagePrizes;
use Illuminate\Database\Seeder;

class MainPageSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(MainPageBlocksSeeder::class);

        MainPage::query()->firstOrCreate([
            'sub_header_id' => MainPageBlocks::query()->where('key', MainPageEnum::SUB_HEADER)->first()->id,
            'votes_id' => MainPageBlocks::query()->where('key', MainPageEnum::VOTES)->first()->id,
            'info_id' => MainPageBlocks::query()->where('key', MainPageEnum::INFO)->first()->id,
            'winners_id' => MainPageBlocks::query()->where('key', MainPageEnum::WINNERS)->first()->id,
        ]);

        MainPagePrizes::insert([
            ['main_page_id' => 1, 'image' => '123', 'text' => '123'],
            ['main_page_id' => 1, 'image' => '234', 'text' => '234'],
        ]);
    }
}
