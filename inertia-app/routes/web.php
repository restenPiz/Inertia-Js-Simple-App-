<?php

use App\Http\Controllers\Truck\truckController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//*Inicio da rota mae
Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('Welcome');

Route::get('/truck', [truckController::class, 'index']);
