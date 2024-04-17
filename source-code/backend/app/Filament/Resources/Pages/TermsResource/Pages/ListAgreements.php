<?php

namespace App\Filament\Resources\Pages\TermsResource\Pages;

use App\Filament\Resources\Pages\TermsResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListAgreements extends ListRecords
{
    protected static string $resource = TermsResource::class;
    protected static ?string $title = 'Правила пользования Сайтом БИКИНИ СТАР';

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
