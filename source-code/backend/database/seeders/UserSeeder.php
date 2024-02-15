<?php

namespace Database\Seeders;

use App\Models\Property\Breast;
use App\Models\Property\Country;
use App\Models\Property\HairColor;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Country::create(
            [
                'name' => 'Russia',
            ]
        );

        HairColor::create(
            [
                'color' => 'Red',
            ]
        );

        Breast::create(
            [
                'size' => 'C',
            ]
        );
        User::factory()->create();


    }
}
