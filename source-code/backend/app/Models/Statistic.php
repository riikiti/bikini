<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Statistic extends Model
{
    use HasFactory;

    protected $guarded = false;

    public function users()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
