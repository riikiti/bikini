<?php

namespace App\Models;

use App\Services\Helpers\Images\ImageHelperService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogPhotos extends Model
{
    use HasFactory;

    protected $table = 'blog_photos';

    protected $fillable = ['image','model_id','blog_id'];

    private ImageHelperService $imageHelper;

    public function __construct() {
        $this->imageHelper = app(ImageHelperService::class);
        $this->imageHelper->setSavingPath('blog-photos');
    }

    public function setImageAttribute($value): void
    {
        $this->attributes['image'] = $this->imageHelper->handleImageUpload(
            value: $value,
            model: $this,
            attribute: 'image'
        );
        $this->save();
    }
}
