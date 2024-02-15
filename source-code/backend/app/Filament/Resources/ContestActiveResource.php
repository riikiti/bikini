<?php

namespace app\Filament\Resources;

use App\Filament\Resources\ContestResource\Pages;
use App\Filament\Resources\ContestResource\RelationManagers\PrizesRelationManager;
use App\Models\Contest;
use Filament\Forms;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Table;

class ContestActiveResource extends Resource
{
    protected static ?string $model = Contest::class;

    protected static ?string $navigationIcon = 'heroicon-o-chart-bar-square';

    protected static ?string $navigationLabel = 'Активный конкурс';


    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->label('Название'),
                ToggleColumn::make('is_active')->label('Открыт'),
                TextColumn::make('start')->label('Старт')->date(),
                TextColumn::make('finish')->label('Завершение')->date(),
                TextColumn::make('created_at')->label('Создан')->date()
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('is_active')
                    ->default(true)
                    ->options([
                        '1' => 'true',
                    ]),
            ])
            ->actions([
                //
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
