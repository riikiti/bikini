<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogPhotos extends Model
{
    use HasFactory;

    protected $table = 'blog_photos';

    protected $fillable = ['image','model_id','blog_id'];
}
