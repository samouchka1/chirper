<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chirp extends Model
{
    use HasFactory;

    protected $fillable = [ //this protects against 'mass assignment vulnerability'.

        'message',

    ];

    public function user()

    {

        return $this->belongsTo(User::class); 
        //'belongsTo' = inverse of 'hasMany' on 'User' model

    }
}
