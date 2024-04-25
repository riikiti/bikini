<?php

namespace app\Filament\Resources\ChatResource;

use App\Filament\Resources\ChatResource\Pages;
use App\Models\Chat;
use App\Models\User;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Mohamedsabil83\FilamentFormsTinyeditor\Components\TinyEditor;

class ChatResource extends Resource
{
    protected static ?string $model = Chat::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-oval-left';
    protected static ?string $navigationLabel = 'Чаты';
    protected static ?string $navigationGroup = 'Пользователь';


    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')->label('id'),
                TextColumn::make('sender.email')->label('Отправитель'),
                TextColumn::make('receiver.email')->label('Получатель'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            RelationManagers\MessagesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListChats::route('/'),
            'create' => Pages\CreateChat::route('/create'),
            'edit' => Pages\EditChat::route('/{record}/edit'),
        ];
    }
}
