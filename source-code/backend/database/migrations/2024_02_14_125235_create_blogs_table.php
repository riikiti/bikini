<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->boolean('is_published')->default(true);
            $table->foreignId('blog_photo_id')->constrained('blog_photos', 'id')->cascadeOnDelete();
            $table->foreignId('blog_video_id')->constrained('blog_videos', 'id')->cascadeOnDelete();
            $table->foreignId('model_id')->constrained('models', 'id')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
