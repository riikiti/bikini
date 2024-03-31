<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Contest extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'start',
        'finish',
        'active'
    ];

    public function getDateStartAttribute(): string
    {
        return date('d.m.Y', strtotime($this->start));
    }

    public function getDateFinishAttribute(): string
    {
        return date('d.m.Y', strtotime($this->finish));
    }

    public function prizes(): HasMany
    {
        return $this->hasMany(Prizes::class)->orderBy('place') ;
    }

//    public function contestModels(): BelongsToMany
//    {
//        return $this->belongsToMany(User::class,'contest_models')
//            ->withPivot('freeRating', 'paidRating','additionalFreeRating');
//    }
}
