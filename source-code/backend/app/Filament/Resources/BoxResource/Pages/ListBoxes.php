<?php

namespace App\Filament\Resources\UserResource\Pages;

use app\Filament\Resources\BoxResource;
use Filament\Resources\Pages\ListRecords;

class ListBoxes extends ListRecords
{
    protected static string $resource = BoxResource::class;

    protected static ?string $title = 'Боксы';
}
