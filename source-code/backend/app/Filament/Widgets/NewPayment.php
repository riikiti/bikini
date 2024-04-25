<?php

namespace app\Filament\Widgets;

use App\Enum\PaymentStatusEnum;
use App\Models\Statistic;
use Carbon\Carbon;
use Filament\Widgets\ChartWidget;

class NewPayment extends ChartWidget
{
    protected static ?string $heading = 'Зарабаток по месяцам';

    protected function getData(): array
    {
        $data = $this->getPaymentPerMonth();
        return [
            'datasets' => [
                [
                    'label' => 'Новые покупки на сайте',
                    'data' => $data['usersPerMonth']
                ]
            ],
            'labels' => $data['months']
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }

    public function getPaymentPerMonth(): array
    {
        $now = Carbon::now();
        $usersPerMonth = [];
        $months = collect(range(1, 12))->map(function ($month) use ($now, &$usersPerMonth) {
            $count = Statistic::whereMonth('created_at', Carbon::parse($now->month($month)->format('Y-m')))->where(
                'status',
                PaymentStatusEnum::CONFIRM->value
            )->sum('type');
            $usersPerMonth[] = $count;
            return $now->month($month)->translatedFormat('M');
        })->toArray();
        return [
            'usersPerMonth' => $usersPerMonth,
            'months' => $months
        ];
    }
}
