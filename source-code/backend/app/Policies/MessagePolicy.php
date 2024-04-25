<?php

namespace App\Policies;

use App\Models\Message;
use App\Models\User;

class MessagePolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }

    public function update(User $user, Message $message): bool
    {
        return ($user->id === $message->sender_id);
    }

    public function delete(User $user, Message $message): bool
    {
        return ($user->id === $message->sender_id);
    }

}
