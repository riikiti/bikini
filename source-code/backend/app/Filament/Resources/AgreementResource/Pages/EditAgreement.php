<?php

namespace App\Filament\Resources\AgreementResource\Pages;

use app\Filament\Resources\AgreementResource\AgreementResource;
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
