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
        Schema::create('contest_models', function (Blueprint $table) {
            $table->id();
            $table->foreignId('contest_id')->constrained('contests', 'id')->cascadeOnDelete();
            $table->foreignId('user_id')->constrained('users', 'id')->cascadeOnDelete();

            $table->string('photo');
            $table->integer('freeRating');
            $table->integer('additionalFreeRating');
            $table->integer('paidRating');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contest_models');
    }
};
