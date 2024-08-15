<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Truck extends Model
{
    use HasFactory;

    protected $table = 'trucks';

    protected $fillable = [
        'Id',
        'Truck_name',
        'Truck_code',
        'Park_location',
        'Driver_name',
        'Total_value'
    ];

    //*Inicio dos metodos responsaveis por sincronizar as tabelas
    public function park()
    {
        return $this->belongsTo(Park::class, 'id');
    }
}
