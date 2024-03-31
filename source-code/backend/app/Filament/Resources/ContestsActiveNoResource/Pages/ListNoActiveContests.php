<?php

namespace App\Filament\Resources\ContestsActiveNoResource\Pages;

use App\Filament\Resources\ContestsActiveNoResource\NoActiveContestsResource;
use Filament\Resources\Pages\ListRecords;

class ListNoActiveContests extends ListRecords
{
    protected static string $resource = NoActiveContestsResource::class;

    protected static ?string $title = 'Активный конкурс';
}
