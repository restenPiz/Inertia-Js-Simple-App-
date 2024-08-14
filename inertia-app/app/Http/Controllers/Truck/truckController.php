<?php

namespace App\Http\Controllers\Truck;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class truckController extends Controller
{
    public function index()
    {
        return Inertia::render('Truck');
    }
    public function store(Request $request)
    {
        User::create($request->validate([
            'Truck_name' => ['required', 'max:50'],
            'Truck_weight' => ['required', 'max:50'],
            'Driver_name' => ['required', 'max:50', 'email'],
        ]));

        return to_route('users.index');
    }
}
