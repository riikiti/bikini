<?php

namespace database\seeders;

use App\Models\BoxVideos;
use Illuminate\Database\Seeder;

class BoxVideoSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        BoxVideos::factory()->create();
    }
}
