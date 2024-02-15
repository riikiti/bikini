<?php

namespace app\Filament\Resources\ModelResource\Pages;

use app\Filament\Resources\ModelResource\ModelResource;
use Filament\Resources\Pages\ListRecords;

class ListModels extends ListRecords
{
    protected static string $resource = ModelResource::class;

    protected static ?string $title = 'Модели';
}
