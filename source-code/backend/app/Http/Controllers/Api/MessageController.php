<?php

namespace app\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserCompactResource;
use App\Http\Resources\UserMessageResource;
use App\Models\Chat;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index(Request $request, User $user): JsonResponse
    {
        $chat = Chat::query()
            ->where('sender_id', $request->user()->id)
            ->where('receiver_id', $user->id)
            ->exists();
        $chat2 = Chat::query()
            ->where('sender_id', $user->id)
            ->where('receiver_id', $request->user()->id)
            ->exists();
        $senderMessages = [];
        $receiverMessages = [];
        if ($chat) {
            $chat = Chat::query()
                ->where('sender_id', $request->user()->id)
                ->where('receiver_id', $user->id)
                ->first();

            $senderMessages = Message::query()
                ->where('sender_id', $request->user()->id)
                ->where('chat_id', $chat->id)
                ->get();
            $receiverMessages = Message::query()
                ->where('sender_id', $user->id)
                ->where('chat_id', $chat->id)
                ->get();
        } elseif ($chat2) {
            $chat2 = Chat::query()
                ->where('sender_id', $user->id)
                ->where('receiver_id', $request->user()->id)
                ->first();
            $senderMessages = Message::query()
                ->where('sender_id', $request->user()->id)
                ->where('chat_id', $chat2->id)
                ->get();
            $receiverMessages = Message::query()
                ->where('sender_id', $user->id)
                ->where('chat_id', $chat2->id)
                ->get();
        } else {
            return response()->json(['data' => [
                'messages' => [
                    'sender_user' => UserMessageResource::make($request->user()),
                    'receiver_user' => UserMessageResource::make($user),
                    'sent_messages' => null,
                ],
            ],]);
        }
        $sortedSentMessages = collect($senderMessages->merge($receiverMessages))
            ->sortBy('created_at')
            ->values()
            ->all();
        return response()->json([
            'data' => [
                'messages' => [
                    'sender_user' => UserMessageResource::make($request->user()),
                    'receiver_user' => UserMessageResource::make($user),
                    'sent_messages' => $sortedSentMessages,
                ],
            ],
        ]);

    }

    public function getAll(Request $request)
    {
        //было бы прикольно добавить вывод вместе с юзером последнего сообщения в чате
        $senderUser = $request->user();

        $chats = Chat::query()
            ->where('sender_id', $senderUser->id)
            ->orWhere('receiver_id', $senderUser->id)
            ->get();
        foreach ($chats as $chat) {
            if ($chat['sender_id'] == $senderUser->id) {
                $userIds[] = $chat['receiver_id'];
            } else {
                $userIds[] = $chat['sender_id'];
            }
        }
        // Получаем информацию о найденных пользователях
        $users = User::whereIn('id', $userIds)->get();
        return response()->json([
            'status' => 'ok',
            'user_chats' => UserCompactResource::collection($users),
        ]);

    }

    public function store(Request $request, User $user): JsonResponse
    {
        $chat = Chat::query()
            ->where('sender_id', $request->user()->id)
            ->where('receiver_id', $user->id)
            ->exists();
        $chat2 = Chat::query()
            ->where('sender_id', $user->id)
            ->where('receiver_id', $request->user()->id)
            ->exists();
        if (!$chat && !$chat2) {
            $chat = Chat::create([
                'sender_id' => $request->user()->id,
                'receiver_id' => $user->id,
            ]);
        } else {
            $chat = Chat::query()
                ->where('sender_id', $request->user()->id)
                ->where('receiver_id', $user->id)
                ->first();
        }
        // Получаем данные формы
        $data = $request->validate([
            'content' => 'required',
        ]);
        // Создаем новое сообщение
        $message = new Message([
            'sender_id' => $request->user()->id,
            'content' => $data['content'],
            'chat_id' => $chat->id,
        ]);
        // Сохраняем сообщение
        $message->save();

        return response()->json(['status' => 'success', 'data' => 'Сообщение отправлено']);
    }
}
