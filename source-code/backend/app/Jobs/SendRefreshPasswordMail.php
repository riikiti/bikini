<?php

namespace App\Jobs;

use App\Mail\User\PasswordMail;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendRefreshPasswordMail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected string $email;
    protected string $subject;
    protected string $body;


    public function __construct($user)
    {
        $this->email = $user->email;
        $this->subject = 'Востановление пароля на сайте BikiniStar';
        $this->body = 'http://bikini-star-test.ru:81/password-recovery?id=' . $user->id . '&email=' . $user->email;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Mail::to($this->email)->send(new PasswordMail($this->subject, $this->body));
    }
}
