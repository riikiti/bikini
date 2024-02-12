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

    private ImageHelperService $imageHelper;

    public function __construct()
    {
        $this->imageHelper = app(ImageHelperService::class);
        $this->imageHelper->setSavingPath('prizes/images');
    }

    public function setImageAttribute($value)
    {
        $this->attributes['image'] = $this->imageHelper->handleImageUpload(
            value: $value,
            model: $this,
            attribute: 'image'
        );
        $this->save();
    }
}
