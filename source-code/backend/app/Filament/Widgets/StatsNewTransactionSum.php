<?php

namespace App\Filament\Widgets;

use App\Enum\PaymentStatusEnum;
use App\Models\Transaction;
use Carbon\Carbon;
use Filament\Widgets\ChartWidget;

class StatsNewTransactionSum extends ChartWidget
{
    protected static ?string $heading = 'Деньги в месяц';

    protected function getData(): array
    {
        $amounts = $this->getTransactionPerMonth();
        return [
            'datasets' => [
                [
                    'label' => 'деньги',
                    'data' => $amounts['amountsPerMonth']
                ],
            ],
            'labels' => $amounts['months']
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }

    public function getTransactionPerMonth(): array
    {
        $now = Carbon::now();
        $amountsPerMonth = [];
        $months = collect(range(1, 12))->map(function ($month) use ($now, &$amountsPerMonth) {
            $count = Transaction::whereMonth('created_at', Carbon::parse($now->month($month)->format('Y-m')))->where('status',PaymentStatusEnum::CONFIRM->value)->sum('amount');
            $amountsPerMonth[] = $count;
            return $now->month($month)->format('M');
        })->toArray();
        return [
            'amountsPerMonth' => $amountsPerMonth,
            'months' => $months
        ];
    }
}
