<?php

namespace App\Filament\Resources\StatisticResource\Pages;

use app\Filament\Resources\StatisticResource\StatisticResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListStatistics extends ListRecords
{
    protected static string $resource = StatisticResource::class;
    protected static ?string $title = 'Донаты';
}
