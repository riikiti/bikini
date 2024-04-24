<?php

namespace App\Filament\Widgets;

use App\Enum\PaymentStatusEnum;
use App\Models\Transaction;
use App\Models\User;
use Carbon\Carbon;
use Filament\Widgets\ChartWidget;

class NewPayment extends ChartWidget
{
    protected static ?string $heading = 'Оплаты в месяц';

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
            $count = Transaction::whereMonth('created_at', Carbon::parse($now->month($month)->format('Y-m')))->where(
                'status',
                PaymentStatusEnum::CONFIRM->value
            )->count();
            $usersPerMonth[] = $count;
            return $now->month($month)->translatedFormat('M');
        })->toArray();
        return [
            'usersPerMonth' => $usersPerMonth,
            'months' => $months
        ];
    }
}
