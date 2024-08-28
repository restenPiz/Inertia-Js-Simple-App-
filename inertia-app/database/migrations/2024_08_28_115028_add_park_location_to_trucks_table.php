<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddParkLocationToTrucksTable extends Migration
{
    public function up()
    {
        Schema::table('trucks', function (Blueprint $table) {
            $table->unsignedBigInteger('park_location_id');
            $table->foreign('park_location_id')->references('id')->on('parks')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::table('trucks', function (Blueprint $table) {
            $table->dropForeign(['park_location_id']);
            $table->dropColumn('park_location_id');
        });
    }
}
