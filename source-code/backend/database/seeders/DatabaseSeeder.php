<?php

namespace Database\Seeders;

use Database\Seeders\Pages\MainPageSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(UserSeeder::class);
        $this->call(MainPageSeeder::class);
        $this->call(BoxSeeder::class);
        $this->call(BlogSeeder::class);
        $this->call(AdminUserSeeder::class);
    }
}
