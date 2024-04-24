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
                    'label' => 'Деньги',
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
        $days = collect(range(1, $now->endOfMonth()->day))->map(function ($days) use ($now, &$amountsPerMonth) {
            $count = Transaction::where('status', PaymentStatusEnum::CONFIRM->value)
                ->whereDate('created_at', Carbon::parse($now->day($days)->format('Y-m-d')))
                ->sum('amount');
            $amountsPerMonth[] = $count;
            return $now->day($days)->translatedFormat('d');
        })->toArray();
        return [
            'amountsPerMonth' => $amountsPerMonth,
            'months' => $days
        ];
    }
}
