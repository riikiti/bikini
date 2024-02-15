<?php

namespace App\Filament\Resources\ContestResource\Pages;

use app\Filament\Resources\ContestResource\ContestResource;
use Filament\Resources\Pages\CreateRecord;

class CreateContest extends CreateRecord
{
    protected static string $resource = ContestResource::class;

    protected static ?string $title = 'Создать конкурс';
}
