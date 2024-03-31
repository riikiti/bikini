<?php

namespace App\Services\Helpers\Payment;

interface PaymentHelperService
{
    public function createPayment(float $amount, string $description, array $options = []): string;
}
