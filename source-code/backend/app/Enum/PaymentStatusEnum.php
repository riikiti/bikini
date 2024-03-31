<?php

namespace App\Enum;

enum PaymentStatusEnum: string
{
    case CREATED = 'CREATED';
    case FAILED = 'FAILED';
    case CONFIRM = 'CONFIRM';

}
