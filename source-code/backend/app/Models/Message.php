<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Message extends Model
{
    use HasFactory;


    protected $table = 'messages';

    protected $fillable = ['sender_id', 'content'];

    public static function getCreatedAtAttribute($value) {
        return date('Y-m-d H:i:s', strtotime($value));
    }

    public function sender(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
