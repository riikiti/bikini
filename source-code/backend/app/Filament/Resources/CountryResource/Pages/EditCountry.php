<?php

namespace App\Filament\Resources\CountryResource\Pages;

use app\Filament\Resources\CountryResource\CountryResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditCountry extends EditRecord
{
    protected static string $resource = CountryResource::class;
    protected static ?string $title = 'Страна';

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
