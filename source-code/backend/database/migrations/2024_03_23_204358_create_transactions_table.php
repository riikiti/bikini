<?php

use App\Enum\PaymentStatusEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->decimal('amount')->default(0);
            $table->string('description')->nullable();
            $table->foreignId('user_id')->nullable()->constrained('users', 'id')->cascadeOnDelete();
            $table->enum('status',
                [
                    PaymentStatusEnum::CREATED->value,
                    PaymentStatusEnum::FAILED->value,
                    PaymentStatusEnum::CONFIRM->value,
                    PaymentStatusEnum::WAITING->value,
                    PaymentStatusEnum::CANCELED->value
                ]
            )->default(PaymentStatusEnum::CREATED->value);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
