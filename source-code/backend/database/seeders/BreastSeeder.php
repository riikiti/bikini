<?php

namespace database\seeders;

use App\Enum\BreastEnum;
use App\Enum\HairColorEnum;
use App\Models\Property\Breast;
use App\Models\Property\Country;
use App\Models\Property\HairColor;
use App\Models\User;
use Illuminate\Database\Seeder;

class BreastSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        foreach (BreastEnum::cases() as $key) {
            Breast::query()->firstOrCreate([
                'size' => $key->value,
            ]);
        }
    }
}
