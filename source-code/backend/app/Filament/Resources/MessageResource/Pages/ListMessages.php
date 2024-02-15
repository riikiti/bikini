<?php

namespace App\Filament\Resources\UserResource\Pages;

use app\Filament\Resources\MessageResource\MessageResource;
use Filament\Resources\Pages\ListRecords;

class ListMessages extends ListRecords
{
    protected static string $resource = MessageResource::class;

    protected static ?string $title = 'Сообщения';
}
