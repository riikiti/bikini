<?php

namespace App\Filament\Resources\Pages;

use App\Models\Pages\Policy;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Mohamedsabil83\FilamentFormsTinyeditor\Components\TinyEditor;

class PolicyResource extends Resource
{
    protected static ?string $model = Policy::class;

    protected static ?string $navigationLabel = 'Политика в отношении обработки персональных данных';
    protected static ?string $navigationIcon = 'heroicon-s-window';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(1)
                    ->schema([
                       TextInput::make('title')
                            ->required()
                            ->maxLength(255)
                            ->label('Заголовок'),
                        TinyEditor::make('description')
                            ->required()
                            ->maxLength(255)
                            ->label('Описание'),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')->label('id'),
                Tables\Columns\TextColumn::make('title')->label('Заголовок'),
                Tables\Columns\TextColumn::make('description')->label('Описание'),
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
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => \App\Filament\Resources\Pages\PolicyResource\Pages\ListAgreements::route('/'),
            'create' => \App\Filament\Resources\Pages\PolicyResource\Pages\CreateAgreement::route('/create'),
            'edit' => \App\Filament\Resources\Pages\PolicyResource\Pages\EditAgreement::route('/{record}/edit'),
        ];
    }
}
