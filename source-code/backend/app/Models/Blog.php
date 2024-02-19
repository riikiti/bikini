<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Blog extends Model
{
    use HasFactory;

    protected $table = 'blogs';

    protected $fillable = ['blog_photo_id','blog_video_id','isPublished'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getEmailAttribute(){
        return $this->user->email;
    }

}
