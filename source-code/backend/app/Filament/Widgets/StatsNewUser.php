<?php

namespace App\Filament\Widgets;

use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsNewUser extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Всего пользователей', User::count())
                ->color('success'),
            Stat::make('Моделей', User::query()->where('role', User::MODEL)->count())
                ->color('success'),
            Stat::make('Пользователей', User::query()->where('role', User::USER)->count())
                ->color('success'),
        ];
    }
}
