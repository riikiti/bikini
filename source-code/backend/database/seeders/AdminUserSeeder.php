<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::firstOrCreate([
            'name'=>'admin',
            'email'=>'admin@a.com',
            'password'=>'12345678',
            'role'=>User::ADMIN,
        ]);
    }
}
