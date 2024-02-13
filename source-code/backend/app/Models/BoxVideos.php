<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BoxVideos extends Model
{
    use HasFactory;

    protected $table = 'box_videos';

    protected $fillable = ['video', 'description','box_id'];
}
