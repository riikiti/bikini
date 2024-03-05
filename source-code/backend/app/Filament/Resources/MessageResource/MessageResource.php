<?php

namespace app\Filament\Resources\MessageResource;

use app\Filament\Resources\ContestResource\Pages;
use App\Filament\Resources\ContestResource\RelationManagers\PrizesRelationManager;
use App\Filament\Resources\UserResource\Pages\CreateMessages;
use App\Filament\Resources\UserResource\Pages\ListMessages;
use App\Models\Contest;
use App\Models\Message;
use Filament\Forms;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;

class MessageResource extends Resource
{
    protected static ?string $model = Message::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-oval-left';

    protected static ?string $navigationLabel = 'Сообщения';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Отправить сообщение')->schema([

                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('SenderEmail')->label('Отправил'),
                TextColumn::make('ReceiverEmail')->label('Получил'),
                TextColumn::make('content')->label('Текст'),
                TextColumn::make('created_at')->label('Дата отправки')->timezone('Europe/Moscow')->date('Y-m-d H:i'),
            ])
            ->filters([
                //
            ])
            ->actions([
                //
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
            PrizesRelationManager::class
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListMessages::route('/'),
        ];
    }
}
