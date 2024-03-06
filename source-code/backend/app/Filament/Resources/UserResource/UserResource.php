<?php

namespace app\Filament\Resources\UserResource;

use App\Filament\Resources\UserResource\Pages\SendMessageUsers;
use App\Models\Message;
use App\Models\User;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;
use Illuminate\Http\Request;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-user';

    protected static ?string $navigationLabel = 'Пользователи';
    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('UserId')->label('id')->searchable(),
                TextColumn::make('email')->label('E-mail')->searchable(),
                TextColumn::make('created_at')->label('Дата регистрации')->date(),
                TextColumn::make('role')->label('Роль'),
                ToggleColumn::make('is_active')->label('Активен'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('role')
                    ->options([
                        User::USER => 'Пользователь',
                        User::MODEL => 'Модель',
                        User::ADMIN => 'Админ',
                    ]),
            ])
            ->actions([
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
                            ->default(fn () => auth()->id()),
                        TextInput::make('receiver_id')
                            ->label('Id получателя')
                            ->required()
                            ->default(fn ($record) => $record->UserId),

                        // ...
                    ])
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
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListUsers::route('/'),
        ];
    }
    public static function getAdminId(Request $request){
        return $request->user()->id;
    }
}
