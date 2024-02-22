<?php

namespace app\Filament\Resources\ActiveContestResource;

use App\Filament\Resources\ContestResource\Pages;
use App\Models\Contest;
use App\Models\ContestModel;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

function models(): array
{
    $ActiveContest = Contest::query()
        ->where('is_active', true)
        ->first();

    $ActiveContestModels = ContestModel::query()
        ->where('contest_id', $ActiveContest->id)
        ->get();

    $json = json_decode($ActiveContestModels);
    return $json;
}

function modelsId(): string
{
    $models = models();
    $i = 0;
    $string = '';
    foreach ($models as $model){
        $userIds[$i++] = $model->user_id;
    }

    foreach ($userIds as $key => $value){
        $string .= $value;
    }
    return $string;

}

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
                TextColumn::make(modelsId())->label('Старт')->date(),
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
