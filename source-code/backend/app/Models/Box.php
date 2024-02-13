<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Box extends Model
{
    use HasFactory;

    protected $table = 'boxes';

    protected $fillable = ['price','box_photo_id','box_video_id','isPublished'];


    public function relatedModel(){
        return $this->belongsTo(Model::class);
    }
    public function getModelEmail(){
        return $this->relatedModel()->email;
    }
}
