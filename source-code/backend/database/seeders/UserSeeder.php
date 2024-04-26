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
      /*  Country::create(
            [
                'name' => 'Russia',
                'icon'=>'https://flagicons.lipis.dev/flags/4x3/ru.svg'
            ],
        );*/
        Country::create(
            [
                'name' => 'Belarus',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/by.svg'
            ],
        );
        Country::create(
            [
                'name' => 'German',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/de.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Netherlands',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/nl.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Ukraine',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/ua.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Sweden',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/se.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Moldova',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/md.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Kazakhstan',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/kz.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Italy',
                'icon'=>'https://flagicons.lipis.dev/flags/4x3/it.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Israel',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/il.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Greece',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/gr.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Czech Republic',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/cz.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Denmark',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/dk.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Croatia',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/hr.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Finland',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/fi.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Georgia',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/ge.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Armenia',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/am.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Azerbaijan',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/az.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Türkiye',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/tr.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Spain',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/es.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Switzerland',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/ch.svg'
            ],
        );
        Country::create(
            [
                'name' => 'France',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/fr.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Poland',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/pl.svg'
            ],
        );
        Country::create(
            [
                'name' => 'United Kingdom',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/gb.svg'
            ],
        );
        Country::create(
            [
                'name' => 'USA',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/um.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Belgium',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/be.svg'
            ],
        );
        Country::create(
            [
                'name' => 'China',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/cn.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Kyrgyzstan',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/kg.svg'
            ],
        );
        Country::create(
            [
                'name' => 'South Korea',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/kr.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Thailand',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/th.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Serbia',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/rs.svg'
            ],
        );
        Country::create(
            [
                'name' => 'Brazil',
                'icon'=>'https://flagicons.lipis.dev/flags/1x1/br.svg'
            ],
        );
       // User::factory()->create();
       /* ModelPhoto::create(
            [
                'image' => '123',
                'description' => '123',
                'user_id' => 1
            ]
        );*/


    }
}
