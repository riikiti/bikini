<?php

namespace app\Filament\Resources\ContestActiveResource;

use App\Filament\Resources\ContestResource\Pages;
use App\Models\Contest;
use App\Models\ContestModel;
use App\Models\Message;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\TextInputColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class ContestActiveResource extends Resource
{
    protected static ?string $model = ContestModel::class;

    protected static ?string $navigationIcon = 'heroicon-o-chart-bar-square';

    protected static ?string $navigationLabel = 'Активный конкурс';

    protected static ?string $navigationGroup = 'Конкурс';


    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('ContestName')->label('Название конкурса'),
                TextColumn::make('UserEmail')->label('Модель'),
                ImageColumn::make('photo')->label('Фото')->height(96),
                TextColumn::make('freeRating')->label('Бесплатный'),
                TextInputColumn::make('additionalFreeRating')->label('Добавленный'),
                TextColumn::make('paidRating')->label('Платный'),
                ToggleColumn::make('isActive')->label('Активен'),
            ])
            ->filters([
                SelectFilter::make('is_active')
                    ->options([
                        true => 'Активен',
                    ])
                    ->query(function ($query) {
                        $contestsIds = Contest::query()
                            ->where('is_active', true)
                            ->pluck('id');

                        $query->whereIn('contest_id', $contestsIds);
                    }),

            ])
            ->actions([
                Tables\Actions\CreateAction::make('отправить сообщение')
                    ->label('Отправить')
                    ->model(Message::class)
                    ->form([
                        TextInput::make('content')
                            ->label('Сообщение')
                            ->required()
                            ->maxLength(2048)
                            ->default('Ваша публикация была снята за нарушения пользовательского соглашения, за подробной информацией обратитесь к модератору'),
                        Hidden::make('sender_id')
                            ->label('Id отправителя')
                            ->required()
                            ->default(fn() => auth()->id()),
                        Hidden::make('receiver_id')
                            ->label('Id получателя')
                            ->required()
                            ->default(fn($record) => $record->ModelId),
                    ])
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                ]),
            ]);
    }


    public static function getPages(): array
    {
        return [
            'index' => Pages\ListActiveContests::route('/'),
        ];
    }

}
