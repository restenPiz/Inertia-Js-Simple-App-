<?php

namespace App\Http\Controllers\Park;

use App\Http\Controllers\Controller;
use App\Models\Park;
use Illuminate\Http\Request;
use Inertia\Inertia;

class parkController extends Controller
{
    public function index()
    {
        $parks = Park::all();

        return Inertia::render('Park', [
            'parks' => $parks,
        ]);
    }
    public function parkStore(Request $request)
    {
        Park::create($request->validate([
            'Park_name' => ['required', 'max:50'],
            'Park_location' => ['required', 'max:50'],
            'Park_capacity' => ['required', 'max:50'],
        ]));

        return redirect()->route('index')->with('success', 'Parque adicionado com sucesso!');
    }
    public function delete($id)
    {
        $parks = Park::findOrFail($id);

        $parks->delete();

        return Inertia::render('Park', [
            'parks' => $parks,
        ]);
    }
}
