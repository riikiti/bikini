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
            'box_photo_id' => function () {
                return BoxPhotos::factory()->create()->id;
            },
            'box_video_id' => function () {
                return BoxVideos::factory()->create()->id;
            },
            'user_id' => function () {
                return User::factory();
            },
            'created_at' => now(),
        ];
    }
}
