<?php

namespace App\Enum;

enum UsersActiveStatusEnum: string
{
    case NOT_FILLED_IN = 'Не заполнены поля в профиле';
    case NOT_CONFIRMED_MODERATOR = 'Не подтвержден модератором';
    case NOT_CONFIRMED_EMAIL = 'Не подтверждена почта';
}
