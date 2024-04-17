<?php

namespace App\Filament\Resources\Pages\TermsResource\Pages;

use App\Filament\Resources\Pages\TermsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditAgreement extends EditRecord
{
    protected static string $resource = TermsResource::class;
    protected static ?string $title = 'Правила пользования Сайтом БИКИНИ СТАР';

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
