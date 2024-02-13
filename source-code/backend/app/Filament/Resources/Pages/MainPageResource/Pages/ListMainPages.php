<?php

namespace App\Filament\Resources\Pages\MainPageResource\Pages;

use App\Filament\Resources\Pages\MainPageResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListMainPages extends ListRecords
{
    protected static string $resource = MainPageResource::class;

    protected static ?string $title = 'Главная страница';
}
