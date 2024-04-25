<?php

namespace App\Filament\Resources\ChatResource\Pages;

use app\Filament\Resources\ChatResource\ChatResource;
use App\Models\User;
use Filament\Actions\CreateAction;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Pages\CreateRecord;
use Filament\Tables\Table;

class CreateChat extends CreateRecord
{
    protected static string $resource = ChatResource::class;
    protected static ?string $title = 'Чат';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(1)
                    ->schema([
                        Select::make('sender_id')
                            ->label('Отправитель')
                            ->options(User::all()->pluck('email', 'id'))
                            ->searchable(),
                        Select::make('receiver_id')
                            ->label('Получатель')
                            ->options(User::all()->pluck('email', 'id'))
                            ->searchable()

                    ])
            ]);
    }


}
