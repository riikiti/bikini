<?php

namespace App\Filament\Widgets;

use App\Enum\PaymentStatusEnum;
use App\Models\Transaction;
use App\Models\User;
use Carbon\Carbon;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsPaymentUser extends BaseWidget
{
    protected function getStats(): array
    {
        $currentMonthStart = Carbon::now()->startOfMonth();
        $currentMonthEnd = Carbon::now()->endOfMonth();
        $sum = Transaction::query()->where('status', PaymentStatusEnum::CONFIRM->value)->sum('amount');
        $sumMonth = Transaction::query()
            ->where('status', PaymentStatusEnum::CONFIRM->value)
            ->whereBetween('created_at', [$currentMonthStart, $currentMonthEnd])
            ->sum('amount');;
        return [
            Stat::make('Всего оплат', Transaction::count())
                ->color('success'),
            Stat::make(
                'Успешных оплат',
                Transaction::query()->where('status', PaymentStatusEnum::CONFIRM->value)->count()
            )
                ->description('поступили на кошелек')
                ->color('success'),
            Stat::make('Всего заработано', $sum)
                ->color('success'),
            Stat::make('Заработано за месяц', $sumMonth)
                ->color('success'),
        ];
    }
}
