<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new UserCollection(User::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        $userNum = $user->max('sequence');

        $newUser = $user->create([
           'user_code' => $request->userCode,
           'username' => $request->userName,
           'first_name' => $request->firstName,
           'last_name' => $request->lastName,
           'email' => $request->email,
           'role_id' => $request->role,
           'password' => bcrypt($request->password),
           'sequence' => $userNum + 1,
           'status' => $request->status,
           'created_by' => 1,
           'updated_by' => 1,
           'deleted_by' => 1,
       ]);

        return new UserResource($newUser);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        return response()->json(['data'=> 5]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        return response()->json(['data'=> 5]);
    }
}
