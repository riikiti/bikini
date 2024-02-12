<?php

namespace App\Models\Pages\MainPage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MainPagePrizes extends Model
{
    use HasFactory;

    protected $table = 'main_page_blocks_prizes';

    protected $fillable = ['image', 'text'];
}
