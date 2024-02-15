<?php

namespace App\Filament\Resources\ContestResource\Pages;

use app\Filament\Resources\ActiveContestResource\ContestActiveResource;
use Filament\Resources\Pages\ListRecords;

class ListActiveContests extends ListRecords
{
    protected static string $resource = ContestActiveResource::class;

    protected static ?string $title = 'Активный конкурс';

}
