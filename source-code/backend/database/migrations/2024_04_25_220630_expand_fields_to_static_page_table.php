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
        Schema::table('agreements', function (Blueprint $table) {
            $table->string('description', 16000)->change()->nullable();
        });
        Schema::table('policies', function (Blueprint $table) {
            $table->string('description', 16000)->change()->nullable();
        });
        Schema::table('terms', function (Blueprint $table) {
            $table->string('description', 16000)->change()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('static_page', function (Blueprint $table) {
            //
        });
    }
};
