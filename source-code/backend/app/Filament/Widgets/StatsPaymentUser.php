<?php

namespace app\Filament\Widgets;

use App\Enum\PaymentStatusEnum;
use App\Models\Statistic;
use Carbon\Carbon;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsPaymentUser extends BaseWidget
{
    protected function getStats(): array
    {
        $currentMonthStart = Carbon::now()->startOfMonth();
        $currentMonthEnd = Carbon::now()->endOfMonth();
        $sum = Statistic::query()->where('status', PaymentStatusEnum::CONFIRM->value)->sum('type');
        $sumMonth = Statistic::query()
            ->where('status', PaymentStatusEnum::CONFIRM->value)
            ->whereBetween('created_at', [$currentMonthStart, $currentMonthEnd])
            ->sum('type');;
        return [
            Stat::make('Всего оплат', Statistic::count())
                ->color('success'),
            Stat::make(
                'Успешных оплат',
                Statistic::query()->where('status', PaymentStatusEnum::CONFIRM->value)->count()
            )
                ->description('поступили на кошелек')
                ->color('success'),
            Stat::make('Всего заработано', $sum * 5)
                ->description('в рублях')
                ->color('success'),
            Stat::make('Заработано за ' . Carbon::now()->translatedFormat('F'), $sumMonth * 5)
                ->description('в рублях')
                ->color('success'),
        ];
    }
}
