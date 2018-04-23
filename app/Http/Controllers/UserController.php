<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    private $newRow;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new UserCollection(User::with('roles')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        DB::transaction(function()use($request, $user){
            $userNum = $user->max('sequence');

            $this->newRow = $user->create([
                'user_code' => $request->userCode,
                'username' => $request->userName,
                'first_name' => $request->firstName,
                'last_name' => $request->lastName,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'sequence' => $userNum + 1,
                'status' => $request->status,
                'created_by' => 1,
            ]);

            $this->newRow->roles()->syncWithoutDetaching($request->roles);
        });


        return new UserResource($this->newRow);

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
        $user->user_code = $request->userCode;
        $user->username = $request->userName;
        $user->first_name = $request->firstName;
        $user->last_name = $request->lastName;
        $user->email = $request->email;
        $user->status = $request->status;
        $user->updated_by = 1;
        $user->roles()->sync($request->roles);
        $user->save();
        return new UserResource($user);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
         if($user->delete()){
             return response()->json(['data'=> ['deleted' => true]]);
         }
    }
}
