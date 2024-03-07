<?php

namespace App\Models;

use App\Services\Helpers\Files\FilesHelperService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogVideos extends Model
{
    use HasFactory;

    protected $table = 'blog_videos';

    protected $fillable = ['video','model_id','blog_id'];

//    private FilesHelperService $filesHelper;
//
//    public function __construct() {
//        $this->filesHelper = app(FilesHelperService::class);
//        $this->filesHelper->setSavingPath('blog-videos');
//    }
//
//    public function setVideoAttribute($value): void
//    {
//        $this->attributes['video'] = $this->filesHelper->handleFileUpload(
//            value: $value,
//            model: $this,
//            attribute: 'video'
//        );
//        $this->save();
//    }
}
