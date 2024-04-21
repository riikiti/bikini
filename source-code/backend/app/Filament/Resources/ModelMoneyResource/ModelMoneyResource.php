<?php

namespace App\Filament\Resources\ModelMoneyResource;

use App\Models\Money;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\TextInputColumn;
use Filament\Tables\Table;

class ModelMoneyResource extends Resource
{
    protected static ?string $model = Money::class;

    protected static ?string $navigationIcon = 'heroicon-o-currency-dollar';

    protected static ?string $navigationLabel = 'Финансы';
    protected static ?string $navigationGroup = 'Пользователь';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('model_id')->label('id мoдели'),
                TextColumn::make('Email')->label('Почта'),
                TextInputColumn::make('money')->label('Деньги'),
            ])
            ->filters([
            ])
            ->actions([
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
            'index' => Pages\ListModelMoney::route('/'),
        ];
    }
}
