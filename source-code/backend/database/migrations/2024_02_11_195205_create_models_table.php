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
        Schema::create('models', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->date('birthdate')->nullable();
            $table->smallInteger('height')->nullable();
            $table->smallInteger('weight')->nullable();
            $table->string('hair_color')->nullable();
            $table->string('size')->nullable();
            $table->string('breast')->nullable();
            $table->smallInteger('waist')->nullable();
            $table->smallInteger('hips')->nullable();
            $table->string('country')->nullable();
            $table->string('city')->nullable();
            $table->string('avatar')->nullable();
            $table->string('about', 2048)->nullable();
            $table->boolean('approved')->default(false);
            $table->boolean('active')->default(false);
            $table->string('referral')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('models');
    }
};
