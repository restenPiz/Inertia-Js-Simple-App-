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
        return Inertia::render('Park');
    }
    public function parkStore()
    {
        $table = new Park();

        $table->Park_name = Request::input('Park_name');
        $table->Park_location = Request::input('Park_location');
        $table->Park_capacity = Request::input('Park_capacity');

        $table->save();

        return back();
    }
    public function delete($id)
    {
        $park = Park::findOrFail($id);

        $park->delete();

        return back();
    }
    public function updatePark($id)
    {
        $table = Park::findOrFail($id);

        $table->Park_name = Request::input('Park_name');
        $table->Park_location = Request::input('Park_location');
        $table->Park_capacity = Request::input('Park_capacity');
        $table->Id = Request::input('Id');

        $table->save();

        return back();
    }
}
