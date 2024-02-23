<?php

namespace App\Models;

use App\Services\Helpers\Files\FilesHelperService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BoxVideos extends Model
{
    use HasFactory;

    protected $table = 'box_videos';

    protected $fillable = ['video', 'description','box_id'];

    private FilesHelperService $filesHelper;

    public function __construct() {
        $this->filesHelper = app(FilesHelperService::class);
        $this->filesHelper->setSavingPath('box-videos');
    }

    public function setVideoAttribute($value): void
    {
        $this->attributes['video'] = $this->filesHelper->handleFileUpload(
            value: $value,
            model: $this,
            attribute: 'video'
        );
        $this->save();
    }
}
