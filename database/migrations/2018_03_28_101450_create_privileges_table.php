<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrivilegesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('privileges', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('role_id')->unsigned();
            $table->integer('module_id')->unsigned();
            $table->integer('menu_id')->unsigned();
            $table->string('permission_level')->unique();
            $table->boolean('view')->default(0);
            $table->boolean('insert')->default(0);
            $table->boolean('update')->default(0);
            $table->boolean('delete')->default(0);
            $table->boolean('approve')->default(0);

            addCommonFields($table);

            $table->index(['role_id', 'module_id', 'menu_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('privileges');
    }
}
