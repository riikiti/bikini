<?php

namespace App\Filament\Resources\CountryResource\Pages;

use app\Filament\Resources\CountryResource\CountryResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListCountries extends ListRecords
{
    protected static string $resource = CountryResource::class;
    protected static ?string $title = 'Страны';

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
