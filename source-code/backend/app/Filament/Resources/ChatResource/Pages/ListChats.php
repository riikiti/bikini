<?php

namespace App\Filament\Resources\ChatResource\Pages;

use app\Filament\Resources\ChatResource\ChatResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListChats extends ListRecords
{
    protected static string $resource = ChatResource::class;
    protected static ?string $title = 'Сообщения';
    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
