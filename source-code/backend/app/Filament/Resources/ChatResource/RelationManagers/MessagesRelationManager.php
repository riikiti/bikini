<?php

namespace App\Filament\Resources\ChatResource\RelationManagers;

use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class MessagesRelationManager extends RelationManager
{
    protected static string $relationship = 'messages';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('content')
                    ->required()
                    ->label('Сообщение')
                    ->maxLength(255),
                Forms\Components\Hidden::make('sender_id')->default(
                    User::query()->where('role', User::ADMIN)->first()->id
                )
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('content')
            ->columns([
                TextColumn::make('sender.email')->label('Отправитель'),
                Tables\Columns\TextColumn::make('content')->label('Сообщение'),
                ImageColumn::make('sender.avatar')
                    ->label('Аватар')
                    ->height(96),
                TextColumn::make('created_at')->label('Время'),

            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
