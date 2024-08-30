<?php

use App\Http\Controllers\mainController;
use App\Http\Controllers\Park\parkController;
use App\Http\Controllers\Settings\settingsController;
use App\Http\Controllers\Truck\truckController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//*Inicio da rota principa;
Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('Welcome');

Route::get('/index', [mainController::class, 'index'])->name('main');

//?Inicio das rotas de camioes
Route::get('/truck', [truckController::class, 'index'])->name('truck');
Route::get('/storeTruck', [truckController::class, 'store'])->name('storeTruck');

//?Inicio das rotas do parque
Route::get('/park', [parkController::class, 'index'])->name('index');
Route::post('/parkStore', [parkController::class, 'parkStore'])->name('parkStore');
Route::delete('/parkDelete/{id}', [ParkController::class, 'delete'])->name('parkDelete');
Route::post('/parkUpdate/{id}', [ParkController::class, 'update'])->name('parkUpdate');

//?Inicio da rota da parte de definicoes
Route::get('/settings', [settingsController::class, 'index'])->name('settings');