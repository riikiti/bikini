<?php

namespace Database\Seeders\Pages;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Enum\MainPageEnum;
use App\Models\Pages\MainPage\MainPageBlocks;
use Illuminate\Database\Seeder;

class MainPageBlocksSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        foreach (MainPageEnum::cases() as $key) {
            MainPageBlocks::query()->firstOrCreate([
                'key' => $key->value,
            ]);
        }
    }
}
