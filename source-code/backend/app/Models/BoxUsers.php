<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BoxUsers extends Model
{
    use HasFactory;

    protected $table = 'box_users';

    protected $fillable = ['user_id','box_id'];
}
