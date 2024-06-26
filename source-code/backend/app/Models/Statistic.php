<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Statistic extends Model
{
    use HasFactory;

    protected $guarded = false;

    public function users(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function model(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'model_id');
    }
}
