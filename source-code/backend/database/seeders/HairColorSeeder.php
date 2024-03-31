<?php

namespace database\seeders;

use App\Enum\HairColorEnum;
use App\Models\Property\Breast;
use App\Models\Property\Country;
use App\Models\Property\HairColor;
use App\Models\User;
use Illuminate\Database\Seeder;

class HairColorSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        foreach (HairColorEnum::cases() as $key) {
            HairColor::query()->firstOrCreate([
                'color' => $key->value,
            ]);
        }
    }
}
