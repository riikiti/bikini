<?php

namespace app\Filament\Resources\BoxResource;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\Box;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;

class BoxResource extends Resource
{
    protected static ?string $model = Box::class;

    protected static ?string $navigationIcon = 'heroicon-m-photo';

    protected static ?string $navigationLabel = 'Боксы';
    protected static ?string $navigationGroup = 'Пользователь';

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')->label('id')->searchable(),
                TextColumn::make('price')->label('Стоимость'),
                TextColumn::make('email')->label('Модель'),
                TextColumn::make('created_at')->label('Дата создания')->date(),
                ToggleColumn::make('is_published')->label('Опубликован модератором'),
            ])
            ->filters([
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
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBoxes::route('/')
        ];
    }
}
