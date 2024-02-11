<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model as BaseModel;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Model extends BaseModel
{
    use HasFactory;
    protected $fillable = [
        'email',
        'email_verified_at',
        'password',
        'birthdate',
        'height',
        'weight',
        'hair_color',
        'size',
        'breast',
        'waist',
        'hips',
        'country',
        'city',
        'avatar',
        'about',
        'approved',
        'active',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'birthdate' => 'date',
        'password' => 'hashed',
    ];

    public function photos(): HasMany
    {
        return $this->hasMany(ModelPhoto::class,'model_id','id');
    }

}
