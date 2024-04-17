<?php

namespace App\Filament\Resources\PolicyResource\Pages;


use App\Filament\Resources\TermsResource\TermsResource;
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
