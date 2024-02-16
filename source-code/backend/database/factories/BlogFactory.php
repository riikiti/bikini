<?php

namespace Database\Factories;

use App\Models\BlogPhotos;
use App\Models\BlogVideos;
use App\Models\Model;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'blog_photo_id' => function () {
                return BlogPhotos::factory()->create()->id;
            },
            'blog_video_id' => function () {
                return BlogVideos::factory()->create()->id;
            },
            'user_id' => function () {
                return User::factory();
            },
            'created_at' => now(),
        ];
    }
}
