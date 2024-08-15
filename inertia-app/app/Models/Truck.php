<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Truck extends Model
{
    use HasFactory;

    protected $table = 'Trucks';

    protected $fillable = [
        'Id',
        'Truck_name',
        'Truck_code',
        'Park_location',
        'Driver_name',
        'Total_value'
    ];
}
