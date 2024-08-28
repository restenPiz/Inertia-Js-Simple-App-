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

Route::get('/index', [mainController::class, 'index']);

//?Inicio das rotas de camioes
Route::get('/truck', [truckController::class, 'index']);
Route::get('/storeTruck', [truckController::class, 'store']);

//?Inicio das rotas do parque
Route::get('/park', [parkController::class, 'index']);
Route::post('/parkStore', [parkController::class, 'parkStore']);

//?Inicio da rota da parte de definicoes
Route::get('/settings', [settingsController::class, 'index']);