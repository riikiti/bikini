<?php

namespace app\Filament\Resources\TermsResource\Pages;

use App\Filament\Resources\TermsResource\TermsResource;
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
