<?php

namespace App\Filament\Widgets;

use App\Enum\PaymentStatusEnum;
use App\Models\Transaction;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsPaymentUser extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Всего оплат', Transaction::count())
                ->color('success'),
            Stat::make(
                'Успешных оплат',
                Transaction::query()->where('status', PaymentStatusEnum::CONFIRM->value)->count()
            )
                ->description('поступили на кошелек')
                ->color('success')
        ];
    }
}
