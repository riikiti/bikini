<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelPhoto extends Model
{
    use HasFactory;

    protected $table = 'model_photos';

    protected $fillable = ['image', 'description','user_id'];

}
