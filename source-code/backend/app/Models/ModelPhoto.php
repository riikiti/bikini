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

    private ImageHelperService $imageHelper;

    public function __construct()
    {
        $this->imageHelper = app(ImageHelperService::class);
        $this->imageHelper->setSavingPath('model/images');
    }

    public function setPhotoAttribute($value)
    {
        $this->attributes['photo'] = $this->imageHelper->handleImageUpload(
            value: $value,
            model: $this,
            attribute: 'photo'
        );
        $this->save();
    }
}
