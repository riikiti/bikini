<?php

namespace app\Filament\Resources\MessageResource;

use App\Filament\Resources\UserResource\Pages\CreateMessages;
use App\Filament\Resources\UserResource\Pages\ListMessages;
use App\Models\Message;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class MessageResource extends Resource
{
    protected static ?string $model = Message::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-oval-left';

    protected static ?string $navigationLabel = 'Сообщения';

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('SendId')->label('id'),
                TextColumn::make('SenderEmail')->label('Отправил'),
                TextColumn::make('ReceiveId')->label('id'),
                TextColumn::make('ReceiverEmail')->label('Получил'),
                TextColumn::make('content')->label('Текст'),
                TextColumn::make('created_at')->label('Дата отправки')->timezone('Europe/Moscow')->date('Y-m-d H:i'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('Отправил')
                    ->options([
                        auth()->id() => 'Отправил модератор'
                    ])
                    ->attribute('sender_id'),
                Tables\Filters\SelectFilter::make('Получил')
                    ->options([
                        auth()->id() => 'Получил модератор'
                    ])
                    ->attribute('receiver_id'),
            ])
            ->actions([
                // не правильно работает если получатель админ а не отправитель
                Tables\Actions\CreateAction::make('send')
                    ->label('Написать')
                    ->model(Message::class)
                    ->form([
                        TextInput::make('content')
                            ->label('Сообщение')
                            ->required()
                            ->maxLength(2048),
                        TextInput::make('sender_id')
                            ->label('Id отправителя')
                            ->required()
                            ->default(fn() => auth()->id()),
                        TextInput::make('receiver_id')
                            ->label('Id получателя')
                            ->required()
                            ->default(function ($record) {
                                if ($record->ReceiveId == auth()->id()) {
                                    return $record->SendId;
                                }else{
                                    return $record->ReceivedId;
                                }
                            }),

                        // ...
                    ])
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListMessages::route('/'),
        ];
    }
}
