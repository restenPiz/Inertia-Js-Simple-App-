<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Park extends Model
{
    use HasFactory;

    protected $table = 'Parks';

    protected $fillable = [
        'Id',
        'Park_name',
        'Park_location',
        'Park_capacity'
    ];
}
