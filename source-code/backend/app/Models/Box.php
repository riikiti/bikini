<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Box extends Model
{
    use HasFactory;

    protected $table = 'boxes';

    protected $fillable = ['price', 'isPublished','user_id','created_at'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getEmailAttribute(){
        return $this->user->email;
    }

    public function photos(): HasMany
    {
        return $this->hasMany(BoxPhotos::class);
    }

    public function videos(): HasMany
    {
        return $this->hasMany(BoxVideos::class);
    }
}
