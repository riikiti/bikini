<?php

namespace App\Filament\Resources\ContestResource\Pages;

use app\Filament\Resources\ContestResource\ContestResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListContests extends ListRecords
{
    protected static string $resource = ContestResource::class;

    protected static ?string $title = 'Конкурсы';

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
