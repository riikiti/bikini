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

    protected string $mail;
    protected string $subject;
    protected string $body;


    public function __construct($mail, $subject, $body)
    {
        $this->mail = $mail;
        $this->subject = $subject;
        $this->body = $body;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Mail::to($this->mail)->send(new PasswordMail($this->subject, $this->body));
    }
}
