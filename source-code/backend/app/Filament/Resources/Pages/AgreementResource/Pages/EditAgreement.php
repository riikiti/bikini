<?php

namespace App\Filament\Resources\Pages\AgreementResource\Pages;

use App\Filament\Resources\Pages\AgreementResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditAgreement extends EditRecord
{
    protected static string $resource = AgreementResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
