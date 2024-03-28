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
        Schema::create('winner_lists', function (Blueprint $table) {
            $table->id();
            $table->integer('place');
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('contest_id')->constrained('contests')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('winner_lists');
    }
};
