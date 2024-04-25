<?php

namespace App\Filament\Widgets;

use App\Enum\PaymentStatusEnum;
use App\Models\Statistic;
use App\Models\Transaction;
use Carbon\Carbon;
use Filament\Widgets\ChartWidget;

class StatsNewTransactionSum extends ChartWidget
{

    public function getHeading(): string
    {
        return "Зарабаток за " . Carbon::now()->translatedFormat('F');
    }
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
            $count = Statistic::where('status', PaymentStatusEnum::CONFIRM->value)
                ->whereDate('created_at', Carbon::parse($now->day($days)->format('Y-m-d')))
                ->sum('type');
            $amountsPerMonth[] = $count;
            return $now->day($days)->translatedFormat('d');
        })->toArray();
        return [
            'amountsPerMonth' => $amountsPerMonth,
            'months' => $days
        ];
    }
}
