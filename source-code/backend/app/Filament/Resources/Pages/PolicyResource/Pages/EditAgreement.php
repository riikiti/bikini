<?php

namespace App\Filament\Resources\Pages\PolicyResource\Pages;

use App\Filament\Resources\Pages\PolicyResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditAgreement extends EditRecord
{
    protected static string $resource = PolicyResource::class;
    protected static ?string $title = 'Политика в отношении обработки персональных данных';
    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
