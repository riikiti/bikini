<?php

namespace app\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserCompactResource;
use App\Http\Resources\UserMessageResource;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index(Request $request, User $user): JsonResponse
    {

        // Получаем текущего пользователя
        $senderUser = $request->user();
        // Получаем все сообщения, связанные с этим пользователем
        $receivedMessages = $senderUser->receivedMessages->where('sender_id', $user->id);
        $sentMessages = $senderUser->sentMessages->where('receiver_id', $user->id);
        foreach ($receivedMessages as $message)
        {
            $message['created_at'] = Message::getCreatedAtAttribute($message['created_at']);
            $message['updated_at'] = Message::getCreatedAtAttribute($message['updated_at']);
            $messages[] = $message;
        }
        foreach ($sentMessages as $message)
        {
            $message['created_at'] = Message::getCreatedAtAttribute($message['created_at']);
            $message['updated_at'] = Message::getCreatedAtAttribute($message['updated_at']);
            $messages[] = $message;
        }
        $sortedMessages = collect($messages)->sortBy('created_at');
        return response()->json(['status' => 'success', 'data' =>
            ['messenger' => [
                'sender_user' => UserMessageResource::make($senderUser),
                'receiver_user' => UserMessageResource::make($user),
                'messages' => $sortedMessages,
            ]]]);

    }

    public function getAll(Request $request)
    {
        //было бы прикольно добавить вывод вместе с юзером последнего сообщения в чате
        $senderUser = $request->user();

        // Находим всех пользователей, с которыми у текущего пользователя есть переписка
        $userIds = Message::query()
            ->where('sender_id', $senderUser->id)
            ->orWhere('receiver_id', $senderUser->id)
            ->groupBy('sender_id', 'receiver_id')
            ->pluck('sender_id')
            ->merge(Message::query()
                ->where('sender_id', $senderUser->id)
                ->orWhere('receiver_id', $senderUser->id)
                ->groupBy('sender_id', 'receiver_id')
                ->pluck('receiver_id'))
            ->unique();

        foreach ($userIds as $key => $element) {
            if ($element == $senderUser->id) {
                unset($userIds[$key]); // удаляем элемент из массива по ключу
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
        // Получаем данные формы
        $data = $request->validate([
            'content' => 'required',
        ]);
        // Создаем новое сообщение
        $message = new Message([
            'sender_id' => $request->user()->id,
            'receiver_id' => $user->id,
            'content' => $data['content'],
        ]);
        // Сохраняем сообщение
        $message->save();

        return response()->json(['status' => 'success', 'data' => 'Сообщение отправлено']);
    }
}
