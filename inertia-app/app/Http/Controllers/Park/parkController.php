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
    public function update(Request $request, $id)
    {
        $park = Park::findOrFail($id);

        $validatedData = $request->validate([
            'Park_name' => ['required', 'max:50'],
            'Park_location' => ['required', 'max:50'],
            'Park_capacity' => ['required', 'numeric'],
        ]);

        $park->update($validatedData);

        return back()->with('success', 'Parque atualizado com sucesso!');
    }
    public function delete($id)
    {
        $park = Park::findOrFail($id);
        $park->delete();

        return back()->with('success', 'Parque deletado com sucesso!');
    }
}
