<?php

namespace App\Listeners;

use App\Events\SendMessageEvent;
use App\Models\Chat;
use App\Models\Message;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendMessageListener
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(SendMessageEvent $event): void
    {
        $chat = new Chat(
            ['sender_id' => User::query()->where('role', User::ADMIN)->first()->id, 'receiver_id' => $event->user->id]
        );
        $chat->save();
        $data = [
            'sender_id' => User::query()->where('role', User::ADMIN)->first()->id,
            'content' => 'Привет, мы рады тебе :) Есть вопросы ?',
            'chat_id' => $chat->id
        ];
        Message::create($data);
    }
}
