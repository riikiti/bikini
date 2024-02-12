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
        Schema::create('main_page_blocks', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('description',2000)->nullable();
            $table->string('button_name')->nullable();
            $table->string('link')->nullable();
            $table->string('image')->nullable();
            $table->string('key')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('main_page_blocks');
    }
};
