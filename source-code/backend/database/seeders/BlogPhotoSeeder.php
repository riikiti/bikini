<?php

namespace Database\Seeders;

use App\Models\BlogPhotos;
use Illuminate\Database\Seeder;

class BlogPhotoSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        BlogPhotos::factory()->create();
    }
}
