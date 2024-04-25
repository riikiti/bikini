<?php

namespace App\Filament\Resources\ChatResource\Pages;

use app\Filament\Resources\ChatResource\ChatResource;
use App\Models\User;
use Filament\Actions;
use Filament\Actions\Action;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Pages\EditRecord;

class EditChat extends EditRecord
{


    protected static string $resource = ChatResource::class;
    protected static ?string $title = 'Чат';
    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(1)
                    ->schema([
                        Select::make('sender_id')
                            ->label('Отправитель')
                            ->options(User::all()->pluck('email', 'id'))
                            ->disabled(),
                        Select::make('receiver_id')
                            ->label('Получатель')
                            ->options(User::all()->pluck('email', 'id'))
                            ->disabled()

                    ])
            ]);
    }
}
