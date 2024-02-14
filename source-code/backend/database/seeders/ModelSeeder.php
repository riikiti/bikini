<?php

namespace Database\Seeders;

use App\Models\Model;
use Illuminate\Database\Seeder;

class ModelSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Model::factory()->create();
    }
}
