<?php

namespace app\Filament\Resources\StatisticResource;

use App\Enum\PaymentStatusEnum;
use App\Filament\Resources\StatisticResource\Pages;
use App\Filament\Resources\StatisticResource\RelationManagers;
use App\Models\Statistic;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class StatisticResource extends Resource
{
    protected static ?string $model = Statistic::class;

    protected static ?string $navigationIcon = 'heroicon-o-currency-dollar';

    protected static ?string $navigationLabel = 'Донаты';
    protected static ?string $navigationGroup = 'Финансы';

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')->label('id'),
                TextColumn::make('type')->label('Деньги'),
                TextColumn::make('users.email')->label('От кого'),
                TextColumn::make('model.email')->label('Кому'),
                TextColumn::make('status')->label('Статус оплаты')->badge()
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                    PaymentStatusEnum::CONFIRM->value => 'Подтвержден',
                    PaymentStatusEnum::WAITING->value => 'В обработке / отменен',
                    PaymentStatusEnum::CREATED->value => 'Создан но не оплачен',
                    ]),
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
            'index' => Pages\ListStatistics::route('/'),
            'create' => Pages\CreateStatistic::route('/create'),
            'edit' => Pages\EditStatistic::route('/{record}/edit'),
        ];
    }
}
