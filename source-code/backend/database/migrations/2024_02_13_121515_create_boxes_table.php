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
        Schema::create('boxes', function (Blueprint $table) {
            $table->id();
            $table->integer('price')->default(500);
            $table->boolean('is_published')->default(true);

            $table->unsignedBigInteger('box_photo_id');
            $table->unsignedBigInteger('box_video_id');
            $table->unsignedBigInteger('user_id');
            $table->foreign('box_photo_id')->references('id')->on('box_photos')->onDelete('set null');
            $table->foreign('box_video_id')->references('id')->on('box_videos')->onDelete('set null');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('boxes');
    }
};
