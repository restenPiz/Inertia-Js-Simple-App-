<?php

namespace App\Http\Controllers\Truck;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class truckController extends Controller
{
    public function index()
    {
        return Inertia::render('Truck');
    }
}
