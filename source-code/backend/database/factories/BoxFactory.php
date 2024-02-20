<?php

namespace Database\Factories;

use App\Models\BoxPhotos;
use App\Models\BoxVideos;
use App\Models\Model;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Box>
 */
class BoxFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'price' => fake()->numberBetween(200, 1000),
            'description' => fake()->text(30),
            'user_id' => function () {
                return User::factory();
            },
            'created_at' => now(),
        ];
    }
}
