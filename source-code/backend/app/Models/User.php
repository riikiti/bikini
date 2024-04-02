<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Property\Breast;
use App\Models\Property\Country;
use App\Models\Property\HairColor;
use App\Services\Helpers\Images\ImageHelperService;
use Filament\Panel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Filament\Models\Contracts\FilamentUser;

class User extends Authenticatable implements JWTSubject, FilamentUser
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
        'avatar',
        'country_id',
        'hair_id',
        'breast_id',
        'fields',
        'role'
    ];

    public const USER = 'user';
    public const ADMIN = 'admin';
    public const MODERATOR = 'moderator';
    public const MODEL = 'model';

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
        'fields' => 'array',
        'options' => 'array',
    ];

    public function options(){
        return $this->options = ['id' => $this->id,'name'=> $this->name,'avatar' => $this->avatar];
    }

    public function getCreatedAttribute(): string
    {
        return date('d.m.Y', strtotime($this->created_at));
    }

    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }

    public function hair(): BelongsTo
    {
        return $this->belongsTo(HairColor::class);
    }

    public function breast(): BelongsTo
    {
        return $this->belongsTo(Breast::class);
    }

    public function getFieldsValue()
    {
        return $this->fields;
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function photos(): HasMany
    {
        return $this->hasMany(ModelPhoto::class, 'user_id', 'id');
    }

    public function box(): HasMany
    {
        return $this->hasMany(Box::class, 'user_id', 'id');
    }

    public function canAccessPanel(Panel $panel): bool
    {
        return $this->role == static::ADMIN;
    }

    public function sentMessages(): HasMany
    {
        return $this->hasMany(Message::class,'sender_id','id');
    }

    public function receivedMessages(): HasMany
    {
        return $this->hasMany(Message::class,'receiver_id','id');
    }

    public function fieldsAreFilled()
    {
        return !empty($this->avatar)
            && !empty($this->country_id)
            && !empty($this->hair_id)
            && !empty($this->breast_id)
            && !empty($this->fields);
    }
    public function getUserIdAttribute()
    {
        return $this->id;
    }

}
