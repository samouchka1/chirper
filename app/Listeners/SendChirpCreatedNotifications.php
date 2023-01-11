<?php

namespace App\Listeners;

use App\Events\ChirpCreated;
use App\Models\User; //added
use App\Notifications\NewChirp; //added
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendChirpCreatedNotifications implements ShouldQueue //tells Laravel that the listener should be run in a queue. instead of "sync"
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\ChirpCreated  $event
     * @return void
     */
    public function handle(ChirpCreated $event)
    {
        foreach (User::whereNot('id', $event->chirp->user_id)->cursor() as $user) {
                                                    //The cursor method will only execute a single database query
            $user->notify(new NewChirp($event->chirp));
        }
    }
}
