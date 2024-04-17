<?php

namespace App\Filament\Resources\Pages\AgreementResource\Pages;

use App\Filament\Resources\Pages\AgreementResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListAgreements extends ListRecords
{
    protected static string $resource = AgreementResource::class;
    protected static ?string $title = 'Пользовательское соглашение';

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
