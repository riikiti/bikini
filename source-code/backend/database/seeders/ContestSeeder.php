<?php

namespace Database\Seeders;

use App\Models\Contest;
use App\Models\Prizes;
use Illuminate\Database\Seeder;

class ContestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Contest::factory()->create();
        Prizes::create([
            'contest_id' => 1,
            'place' => 1,
            'name' => "123",
            'description' => "123",
            'image' => "123",
        ]);
    }
}
