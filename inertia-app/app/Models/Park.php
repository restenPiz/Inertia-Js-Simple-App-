<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Park extends Model
{
    use HasFactory;

    protected $table = 'parks';

    protected $fillable = [
        'Id',
        'Park_name',
        'Park_location',
        'Park_capacity'
    ];

    //?Inicio das rotas de sincronizacao de tabelas
    public function truck()
    {
        return $this->hasMany(Truck::class, 'id');
    }
}
