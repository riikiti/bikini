<?php

namespace App\Filament\Resources\Pages;

use App\Filament\Resources\Pages\MainPageResource\Pages;
use App\Filament\Resources\Pages\MainPageResource\RelationManagers;
use App\Models\Pages\MainPage\MainPage;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Forms\Components\Grid;

class MainPageResource extends Resource
{
    protected static ?string $model = MainPage::class;

    protected static ?string $navigationIcon = 'heroicon-s-window';
    protected static ?string $navigationLabel = 'Главная страница';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(3)
                    ->schema([
                        Forms\Components\TextInput::make('seo_title')
                            ->required()
                            ->label('SEO Заголовок')
                            ->maxLength(255),
                        Forms\Components\TextInput::make('seo_description')
                            ->required()
                            ->label('SEO Описание')
                            ->maxLength(255),
                        Forms\Components\TextInput::make('head')
                            ->label('HEAD')
                            ->required()
                            ->maxLength(255),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->label('Страница')->default(MainPage::PAGE_NAME_PUBLIC),
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
            RelationManagers\VotesRelationManager::class,
            RelationManagers\SubHeaderRelationManager::class,
            RelationManagers\InfoRelationManager::class,
            RelationManagers\WinnersRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMainPages::route('/'),
            'edit' => Pages\EditMainPage::route('/{record}/edit'),
        ];
    }
}
