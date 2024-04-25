<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('messages', function (Blueprint $table) {
            $table->dropColumn('receiver_id');
            $table->foreignId('chat_id')->nullable()->constrained('chats', 'id')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('messages', function (Blueprint $table) {
            $table->dropColumn('chat_id');
            $table->foreignId('receiver_id')->nullable()->constrained('users', 'id')->cascadeOnDelete();
        });
    }
};
