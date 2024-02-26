<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContestModel extends Model
{
    use HasFactory;

    protected $table = 'contest_models';
    protected $guarded = false;
}
