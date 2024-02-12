<?php

namespace App\Filament\Resources\ContestResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PrizesRelationManager extends RelationManager
{
    protected static string $relationship = 'prizes';

    protected static ?string $title = 'Призы';

    protected static ?string $modelLabel = 'prize';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')->label('Название')->required()->maxLength(64),
                Select::make('place')->label('Место')
                    ->options([1 => '1 место', 2 => '2 место', 3 => '3 место'])
                    ->required(),
                FileUpload::make('image')->label('Изображение')->image()
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('name')
            ->columns([
                TextColumn::make('place')->label('Место'),
                TextColumn::make('name')->label('Название'),
                ImageColumn::make('image')
                    ->label('Изображение')
                    ->height(96),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
