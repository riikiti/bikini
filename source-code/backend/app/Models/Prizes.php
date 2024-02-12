<?php

namespace App\Models;

use App\Services\Helpers\Images\ImageHelperService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prizes extends Model
{
    use HasFactory;

    protected $fillable =[
        'contest_id',
        'place',
        'name',
        'description',
        'image',
    ];

    protected $casts = [
        'image' => 'array',
    ];
}
