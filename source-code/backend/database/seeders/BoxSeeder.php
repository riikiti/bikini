<?php

namespace database\seeders;

use App\Models\Box;
use Illuminate\Database\Seeder;

class BoxSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Box::factory()->create();
    }
}
