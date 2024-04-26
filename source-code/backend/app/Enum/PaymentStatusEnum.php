<?php

namespace App\Enum;

use Filament\Support\Contracts\HasIcon;

enum PaymentStatusEnum : string  implements HasIcon
{
    case CREATED = 'CREATED';
    case FAILED = 'FAILED';
    case CONFIRM = 'CONFIRM';
    case WAITING = 'WAITING';
    case CANCELED = 'CANCELED';

    public static function getValues(): array
    {
        return [self::CONFIRM, self::FAILED, self::CREATED,self::WAITING];
    }

    public function getIcon(): ?string
    {
        return match ($this) {
            self::CREATED => 'heroicon-m-pencil',
            self::WAITING => 'heroicon-m-check',
            self::CONFIRM => 'heroicon-m-x-mark',
        };
    }
}
