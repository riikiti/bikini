<?php

namespace App\Filament\Resources\UserResource\Pages;

use app\Filament\Resources\BlogResource\BlogResource;
use Filament\Resources\Pages\ListRecords;

class ListBlogs extends ListRecords
{
    protected static string $resource = BlogResource::class;

    protected static ?string $title = 'Блоги';
}
