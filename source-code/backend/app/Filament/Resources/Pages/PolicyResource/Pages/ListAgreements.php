<?php

namespace App\Filament\Resources\Pages\PolicyResource\Pages;


use App\Filament\Resources\Pages\PolicyResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListAgreements extends ListRecords
{
    protected static string $resource = TermsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
