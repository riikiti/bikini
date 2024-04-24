<?php

namespace App\Filament\Widgets;

use App\Models\User;
use Carbon\Carbon;
use Database\Seeders\UserSeeder;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\DB;

class NewFans extends ChartWidget
{
    protected static ?string $heading = 'Поклоники в месяц';
    protected static ?string $pollingInterval = '1m';

    protected function getData(): array
    {
        $users = $this->getUsersPerMonth();
        return [
            'datasets' => [
                [
                    'label' => 'Новые поклоники',
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
            $count = User::whereMonth('created_at', Carbon::parse($now->month($month)->format('Y-m')))->where('role',User::USER)->count();
            $usersPerMonth[] = $count;
            return $now->month($month)->format('M');
        })->toArray();
        return [
            'usersPerMonth' => $usersPerMonth,
            'months' => $months
        ];
    }


}
