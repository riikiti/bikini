<?php

namespace Database\Seeders;


use App\Models\BlogVideos;
use Illuminate\Database\Seeder;

class BlogVideoSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        BlogVideos::factory()->create();
    }
}
