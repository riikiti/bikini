<?php

namespace App\Filament\Resources;

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
use Filament\Tables\Table;

class ContestResource extends Resource
{
    protected static ?string $model = Contest::class;

    protected static ?string $navigationIcon = 'heroicon-o-chart-bar-square';

    protected static ?string $navigationLabel = 'Конкурсы';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Конкурс')->schema([
                    TextInput::make('name')->label('Название')->required()->maxValue(64),
                    Toggle::make('is_active')->label('Открыт'),
                    DatePicker::make('start')->label('Дата начала')->native(false),
                    DatePicker::make('finish')->label('Дата завершения')->native(false)
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->label('Название'),
                ToggleColumn::make('active')->label('Открыт'),
                TextColumn::make('start')->label('Старт')->date(),
                TextColumn::make('finish')->label('Завершение')->date(),
                TextColumn::make('created_at')->label('Создан')->date()
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
            PrizesRelationManager::class
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListContests::route('/'),
            'create' => Pages\CreateContest::route('/create'),
            'edit' => Pages\EditContest::route('/{record}/edit'),
        ];
    }
}
