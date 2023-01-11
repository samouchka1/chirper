<?php

namespace App\Models;

use App\Events\ChirpCreated; //event
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chirp extends Model
{
    use HasFactory;

    protected $fillable = [ //this protects against 'mass assignment vulnerability'.
        'message',
    ];
     
    protected $dispatchesEvents = [
        'created' => ChirpCreated::class,
    ];
    //Now any time a new Chirp is created, the ChirpCreated event will be dispatched.

    public function user()

    {

        return $this->belongsTo(User::class); 
        //'belongsTo' = inverse of 'hasMany' on 'User' model

    }
}
