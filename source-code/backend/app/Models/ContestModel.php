<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ContestModel extends Model
{
    use HasFactory;

    protected $table = 'contest_models';
    protected $guarded = false;

    public function Contests(): BelongsTo
    {
        return $this->belongsTo(Contest::class,'contest_id','id');
    }

    public function getContestNameAttribute()
    {
        return $this->Contests->name;
    }
    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class,'user_id','id');
    }
    public function getUserEmailAttribute()
    {
        return $this->users->email;
    }
    public function getModelIdAttribute()
    {
        return $this->users->id;
    }
}
