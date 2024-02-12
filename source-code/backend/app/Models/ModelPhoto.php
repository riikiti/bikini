<?php

namespace App\Models;

use App\Services\Helpers\Images\ImageHelperService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelPhoto extends Model
{
    use HasFactory;

    protected $table = 'model_photos';

    protected $fillable = ['photo', 'description'];

}
