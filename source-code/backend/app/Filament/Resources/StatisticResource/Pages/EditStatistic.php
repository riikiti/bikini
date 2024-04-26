<?php

namespace App\Filament\Resources\StatisticResource\Pages;

use app\Filament\Resources\StatisticResource\StatisticResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditStatistic extends EditRecord
{
    protected static string $resource = StatisticResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
