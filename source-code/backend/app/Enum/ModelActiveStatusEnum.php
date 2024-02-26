<?php

namespace App\Enum;

enum ModelActiveStatusEnum: string
{
    case NOT_FILLED_IN = '- Не заполнены поля в профиле';
    case NOT_FILLED_PORTFOLIO = '- не заполнен раздел (Портфолио)';
    case NOT_CONFIRMED_MODERATOR = '- Не подтвержден модератором';
}
