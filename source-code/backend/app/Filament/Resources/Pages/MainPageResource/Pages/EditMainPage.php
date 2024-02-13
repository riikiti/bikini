<?php

namespace App\Filament\Resources\Pages\MainPageResource\Pages;

use App\Filament\Resources\Pages\MainPageResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditMainPage extends EditRecord
{
    protected static string $resource = MainPageResource::class;

    protected static ?string $title = 'Редактирование Главной страницы';
}
