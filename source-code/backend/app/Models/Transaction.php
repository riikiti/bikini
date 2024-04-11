<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = ['amount', 'description', 'user_id', 'status'];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
