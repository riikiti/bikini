<?php

namespace App\Filament\Resources\UserResource\Pages;

use app\Filament\Resources\UserResource\UserResource;
use Filament\Resources\Pages\ListRecords;

class ListUsers extends ListRecords
{
    protected static string $resource = UserResource::class;

    protected static ?string $title = 'Пользователи';
}
