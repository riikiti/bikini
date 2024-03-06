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
        $this->call(HairColorSeeder::class);
        $this->call(BreastSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(MainPageSeeder::class);
      //  $this->call(BoxSeeder::class);
      //  $this->call(BlogSeeder::class);
        $this->call(AdminUserSeeder::class);
        $this->call(ContestSeeder::class);
      //  $this->call(BlogPhotoSeeder::class);
      //  $this->call(BlogVideoSeeder::class);
      //  $this->call(BoxVideoSeeder::class);
      //  $this->call(BoxPhotoSeeder::class);
    }
}
