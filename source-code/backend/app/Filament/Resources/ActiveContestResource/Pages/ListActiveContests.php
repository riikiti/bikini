<?php

namespace App\Filament\Resources\ContestResource\Pages;

use app\Filament\Resources\ContestActiveResource;
use App\Filament\Resources\ContestResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListActiveContests extends ListRecords
{
    protected static string $resource = ContestActiveResource::class;

    protected static ?string $title = 'Активный конкурс';

}
