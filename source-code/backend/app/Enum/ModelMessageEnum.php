<?php

namespace App\Enum;

enum ModelMessageEnum: string
{
    case FROM_SUBSCRIBERS = 'from_subscribers';
    case FROM_ALL_MODELS = 'from_all_models';
    case FROM_ALL_FANS = 'from_all_fans';
    case FROM_ALL_USERS = 'from_all_users';
    case FROM_NO_ONE = 'from_no_one';
}
