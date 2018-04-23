<?php

if(!function_exists('getDateTimeFormat')){

    function getDateTime($dateTime, $format)
    {
        return date_format(date_create($dateTime), $format);
    }
}

if(!function_exists('addCommonFields')){

    function addCommonFields($table)
    {
        $table->integer('sequence')->unique()->unsigned();
        $table->boolean('status')->default(0);
        $table->timestamps();
        $table->softDeletes();
        $table->integer('created_by')->unsigned()->nullalble();
        $table->integer('updated_by')->unsigned()->nullable();
        $table->integer('deleted_by')->unsigned()->nullable();
        return;
    }
}
