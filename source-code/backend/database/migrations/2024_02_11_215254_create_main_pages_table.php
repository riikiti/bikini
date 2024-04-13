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
        Schema::create('main_pages', function (Blueprint $table) {
            $table->id();
            $table->string('seo_title')->nullable();
            $table->string('seo_description')->nullable();
            $table->string('head')->nullable();
            $table->unsignedBigInteger('sub_header_id')->nullable();
            $table->unsignedBigInteger('votes_id')->nullable();
            $table->unsignedBigInteger('info_id')->nullable();
            $table->unsignedBigInteger('winners_id')->nullable();
            $table->foreign('sub_header_id')->references('id')->on('main_page_blocks')->onDelete('set null');
            $table->foreign('votes_id')->references('id')->on('main_page_blocks')->onDelete('set null');
            $table->foreign('info_id')->references('id')->on('main_page_blocks')->onDelete('set null');
            $table->foreign('winners_id')->references('id')->on('main_page_blocks')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('main_pages');
    }
};
