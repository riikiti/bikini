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
        Schema::create('main_page_blocks_prizes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('main_page_id')->constrained('main_pages', 'id')->cascadeOnDelete();
            $table->string('image');
            $table->string('text');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('main_page_blocks_prizes');
    }
};
