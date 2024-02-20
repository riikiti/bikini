<?php

namespace database\seeders;

use App\Models\BoxPhotos;
use Illuminate\Database\Seeder;

class BoxPhotoSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        BoxPhotos::factory()->create();
    }
}
