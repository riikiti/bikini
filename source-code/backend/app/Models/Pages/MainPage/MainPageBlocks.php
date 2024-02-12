<?php

namespace App\Models\Pages\MainPage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class MainPageBlocks extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'button_name', 'link', 'image', 'key'];

}
