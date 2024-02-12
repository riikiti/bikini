<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Services\Helpers\Images\ImageHelperService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar'
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
        'password' => 'hashed',
        'created_at' => 'date',
    ];

    public function getCreatedAttribute(): string
    {
        return date('d.m.Y', strtotime($this->created_at));
    }

    private ImageHelperService $imageHelper;

    public function __construct()
    {
        $this->imageHelper = app(ImageHelperService::class);
        $this->imageHelper->setSavingPath('user/images');
    }

    public function setAvatarAttribute($value)
    {
        $this->attributes['avatar'] = $this->imageHelper->handleImageUpload(
            value: $value,
            model: $this,
            attribute: 'avatar'
        );
        $this->save();
    }
}
