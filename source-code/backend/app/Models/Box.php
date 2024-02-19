<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Box extends Model
{
    use HasFactory;

    protected $table = 'boxes';

    protected $fillable = ['price', 'box_photo_id', 'box_video_id', 'isPublished','user_id','created_at'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getEmailAttribute(){
        return $this->user->email;
    }

    public function photos(): BelongsTo
    {
        return $this->belongsTo(BoxPhotos::class);
    }

    public function videos(): BelongsTo
    {
        return $this->belongsTo(BoxVideos::class);
    }
}
