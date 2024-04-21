<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Money extends Model
{
    use HasFactory;

    protected $guarded = false;

    public function users(): HasOne
    {
        return $this->hasOne(User::class,'id','model_id');
    }
//
//    public function getIdAttribute()
//    {
//        dd($this->users());
//        return $this->users->id;
//    }
//
    public function getEmailAttribute()
    {
        return $this->users->email;
    }
}
