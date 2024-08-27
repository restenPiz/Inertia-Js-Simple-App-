<?php

namespace App\Http\Controllers\Truck;

use App\Http\Controllers\Controller;
use App\Models\Truck;
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
        Truck::create($request->validate([
            'Truck_name' => ['required', 'max:50'],
            'Truck_weight' => ['required', 'max:50'],
            'Truck_code' => ['required', 'max:50'],
            'Park_location' => ['required', 'max:50'],
            'Driver_name' => ['required', 'max:50'],
            'Rest_days' => ['required', 'max:50'],
            'Total_value' => ['required', 'max:50'],
        ]));

        return to_route('truck.index');
    }

    public function updateIndex()
    {
        $table = new Truck();

        $table->Ola = Request::input('Ola');

        return to_route('Ola Mundo');
    }
    public function delete($id)
    {
        $destroy = Truck::findOrFail($id);

        $destroy->delete();

        return to_route('truck.index');
    }
    public function returnRout()
    {
        return to_route('Index.ola');
    }
    public function update($id, $request)
    {
        Truck::findOrFail($id);

        Truck::update($request->validate([
            'Truck_name' => ['required', 'max:50'],
            'Truck_weight' => ['required', 'max:50'],
            'Truck_code' => ['required', 'max:50'],
            'Park_location' => ['required', 'max:50'],
            'Driver_name' => ['required', 'max:50'],
            'Rest_days' => ['required', 'max:50'],
            'Total_value' => ['required', 'max:50'],
        ]));

        return to_route('truck.index');
    }
}
