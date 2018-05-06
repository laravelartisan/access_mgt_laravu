<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::post('auth/signin', 'AuthController@login');

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function(){

    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::apiResource('users', 'UserController');
    Route::apiResource('roles', 'RoleController');
    Route::apiResource('modules', 'ModuleController');
    Route::apiResource('menus', 'MenuController');

    Route::get('menus/{module}/module/{excludableMenu?}', 'MenuController@getMenusByModule');
});


