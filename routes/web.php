<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
# Vue
Route::any('{all}', function () {
//dd($d2->diff($d1)->s);
    return view('index');
})
    ->where(['all' => '.*']);
