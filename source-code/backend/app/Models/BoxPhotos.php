<?php

namespace App\Models;

use App\Services\Helpers\Images\ImageHelperService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BoxPhotos extends Model
{
    use HasFactory;

    protected $table = 'box_photos';

    protected $fillable = ['image', 'description','box_id'];

    private ImageHelperService $imageHelper;

    public function __construct() {
        $this->imageHelper = app(ImageHelperService::class);
        $this->imageHelper->setSavingPath('box-photos');
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
