<?php

namespace App\Models\Pages\MainPage;

use App\Services\Helpers\Images\ImageHelperService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MainPagePrizes extends Model
{
    use HasFactory;

    protected $table = 'main_page_blocks_prizes';

    protected $fillable = ['image', 'text'];

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
