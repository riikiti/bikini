<?php

namespace App\Services\Helpers\Payment;

interface PaymentHelperService
{
    public function createPayment(int $amount, array $options = []): string;
}
