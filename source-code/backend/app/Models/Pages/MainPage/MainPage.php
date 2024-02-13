<?php

namespace App\Models\Pages\MainPage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class MainPage extends Model
{
    use HasFactory;

    protected $fillable = ['seo_title', 'seo_description', 'head', 'sub_header_id', 'votes_id', 'info_id', 'winners_id'];

    public function sub_header(): HasOne
    {
        return $this->hasOne(MainPageBlocks::class, 'id', 'sub_header_id');
    }

    public function votes(): HasOne
    {
        return $this->hasOne(MainPageBlocks::class, 'id', 'votes_id');
    }

    public function info(): HasOne
    {
        return $this->hasOne(MainPageBlocks::class, 'id', 'info_id');
    }

    public function winners(): HasOne
    {
        return $this->hasOne(MainPageBlocks::class, 'id', 'winners_id');
    }
}
