<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BoxPhotos extends Model
{
    use HasFactory;

    protected $table = 'box_photos';

    protected $fillable = ['image', 'description','box_id'];

}
