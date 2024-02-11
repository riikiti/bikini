<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Model;
use Illuminate\Database\Seeder;

class ModelSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Model::firstOrCreate([
            'email'=>'model@model.com',
            'password'=>'$2y$12$5LcwA22o7w0scpYXpmWsx./TU7/bryLDJS0vBFS8KQOGX6ceef15m"',
        ]);
    }
}
