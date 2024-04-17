<?php

namespace App\Filament\Resources\AgreementResource\Pages;

use app\Filament\Resources\AgreementResource\AgreementResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListAgreements extends ListRecords
{
    protected static string $resource = AgreementResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
