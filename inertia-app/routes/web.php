<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//*Inicio da rota mae
Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('Welcome');

Route::get('/Welcome', function () {
    return Inertia::render('Welcome');
})->name('wel');
