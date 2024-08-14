<?php

use App\Http\Controllers\mainController;
use App\Http\Controllers\Truck\truckController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//*Inicio da rota mae
Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('Welcome');

Route::get('/index', [mainController::class, 'index']);
Route::get('/truck', [truckController::class, 'index']);
Route::get('/storeTruck', [truckController::class, 'store']);
