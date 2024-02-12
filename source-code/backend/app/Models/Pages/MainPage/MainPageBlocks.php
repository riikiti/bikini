<?php

namespace App\Models\Pages\MainPage;

use App\Services\Helpers\Files\FilesHelperService;
use App\Services\Helpers\Images\ImageHelperService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class MainPageBlocks extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'button_name', 'link', 'image', 'key'];

    private ImageHelperService $imageHelper;

    public function __construct()
    {
        $this->imageHelper = app(ImageHelperService::class);
        $this->imageHelper->setSavingPath('main-page/images');
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
