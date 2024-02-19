<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Message extends Model
{
    use HasFactory;

    protected $table = 'messages';

    protected $fillable = ['sender_id','receiver_id','content'];

    public function messageUser(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function senderUser(): BelongsTo
    {
        return $this->belongsTo(User::class,'sender_id','id');
    }

    public function receiverUser(): BelongsTo
    {
        return $this->belongsTo(User::class,'receiver_id','id');
    }

    public function getSenderEmailAttribute(){
        return $this->senderUser->email;
    }

    public function getReceiverEmailAttribute(){
        return $this->receiverUser->email;
    }
}
