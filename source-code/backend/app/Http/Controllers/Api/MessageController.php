<?php

namespace app\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index(Request $request,User $user): JsonResponse
    {
        // Получаем текущего пользователя
        $senderUser = $request->user();

        // Получаем все сообщения, связанные с этим пользователем
        $receivedMessages = $senderUser->receivedMessages;
        $sentMessages = $senderUser->sentMessages;

        return response()->json(['status' => 'success', 'data' =>
            ['messages' => [
                'receiver_user' =>$user->options(),
                'sent_messages' => $sentMessages,
                'received_messages' => $receivedMessages,
            ]]]);

    }
    public function getAll(Request $request)
    {
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

        foreach($userIds as $key => $element) {
            if($element == $senderUser->id) {
                unset($userIds[$key]); // удаляем элемент из массива по ключу
            }
        }
// Получаем информацию о найденных пользователях
        $users = User::whereIn('id', $userIds)->get();

        return $users;
    }

    public function store(Request $request): JsonResponse
    {
        // Получаем данные формы
        $data = $request->validate([
            'receiver_id' => 'required',
            'content' => 'required',
        ]);

        // Создаем новое сообщение
        $message = new Message([
            'sender_id' => $request->user()->id,
            'receiver_id' => $data['receiver_id'],
            'content' => $data['content'],
        ]);

        // Сохраняем сообщение
        $message->save();

        return response()->json(['status' => 'success', 'data' => 'Сообщение отправлено']);

    }
}
