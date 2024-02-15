<?php

namespace Database\Seeders;

use App\Models\ModelPhoto;
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
        User::factory()->create();
        ModelPhoto::create(
            [
                'image' => '123',
                'description' => '123',
                'user_id' => 1
            ]
        );


    }
}
