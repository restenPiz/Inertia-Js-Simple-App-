<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('trucks', function (Blueprint $table) {
            $table->id();
            $table->string('Truck_name');
            $table->string('Truck_weight');
            $table->string('Truck_code');
            $table->string('Park_location');
            $table->string('Driver_name');
            $table->string('Rest_days');
            $table->string('Total_value');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('trucks');
    }
};
