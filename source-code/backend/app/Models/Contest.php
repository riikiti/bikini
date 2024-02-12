<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Contest extends Model
{
    use HasFactory;

    protected $fillable= [
        'name',
        'start',
        'finish',
    ];

    public function prizes(): HasMany
    {
        return $this->hasMany(Prizes::class)->orderBy('place');
    }
}
