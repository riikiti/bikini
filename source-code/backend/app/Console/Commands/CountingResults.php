<?php

namespace App\Console\Commands;

use App\Models\Contest;
use App\Models\ContestModel;
use App\Models\WinnerList;
use Illuminate\Console\Command;

class CountingResults extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:counting-results';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Эта функция заносит победителей конкурса в список победителей';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $contest = Contest::query()->where('is_active', true)->first();
        $winners = ContestModel::query()
            ->where('contest_id', $contest->id)
            ->get()
            ->sortByDesc(function ($publication) {
                return $publication->freeRating
                    + $publication->additionalFreeRating
                    + $publication->paidRating;
            })
            ->take(3);
        $place = 1;
        foreach ($winners as $winner) {
            WinnerList::create([
                'user_id' => $winner->user_id,
                'contest_id' => $contest->id,
                'place' => $place++,
            ]);
        }
    }
}
