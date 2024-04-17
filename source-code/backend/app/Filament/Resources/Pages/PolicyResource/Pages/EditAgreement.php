<?php

namespace App\Filament\Resources\Pages\PolicyResource\Pages;

use App\Filament\Resources\Pages\TermsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditAgreement extends EditRecord
{
    protected static string $resource = TermsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
