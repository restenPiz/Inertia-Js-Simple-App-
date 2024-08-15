<?php

namespace App\Http\Controllers\Park;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class parkController extends Controller
{
    public function index()
    {
        return Inertia::render('Park');
    }
}
