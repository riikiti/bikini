<?php

namespace App\Policies;

use App\Models\Chat;
use App\Models\User;

class ChatPolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }

    public function update(User $user, Chat $chat): bool
    {
        return ($user->id === $chat->sender_id || $user->id === $chat->receiver_id);
    }
}
