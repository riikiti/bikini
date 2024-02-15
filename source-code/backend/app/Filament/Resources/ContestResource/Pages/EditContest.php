<?php

namespace App\Filament\Resources\ContestResource\Pages;

use app\Filament\Resources\ContestResource\ContestResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditContest extends EditRecord
{
    protected static string $resource = ContestResource::class;

    protected static ?string $title = 'Редактировать конкурс';

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
