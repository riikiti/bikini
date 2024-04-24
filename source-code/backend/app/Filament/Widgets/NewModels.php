<?php

namespace App\Filament\Widgets;

use App\Models\User;
use Carbon\Carbon;
use Filament\Widgets\ChartWidget;

class NewModels extends ChartWidget
{
    protected static ?string $heading = 'Модели в месяц';
    protected static ?string $pollingInterval = '1m';

    protected function getData(): array
    {
        $users = $this->getUsersPerMonth();
        return [
            'datasets' => [
                [
                    'label' => 'Новые модели',
                    'data' => $users['usersPerMonth']
                ],
            ],
            'labels' => $users['months']
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }

    public function getUsersPerMonth(): array
    {
        $now = Carbon::now();
        $usersPerMonth = [];
        $months = collect(range(1, 12))->map(function ($month) use ($now, &$usersPerMonth) {
            $count = User::whereMonth('created_at', Carbon::parse($now->month($month)->format('Y-m')))->where(
                'role',
                User::MODEL
            )->count();
            $usersPerMonth[] = $count;
            return $now->month($month)->format('M');
        })->toArray();
        return [
            'usersPerMonth' => $usersPerMonth,
            'months' => $months
        ];
    }

}
