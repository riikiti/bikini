<?php

namespace App\Filament\Resources\ModelMoneyResource\Pages;

use App\Filament\Resources\ModelMoneyResource\ModelMoneyResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListModelMoney extends ListRecords
{
    protected static string $resource = ModelMoneyResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
