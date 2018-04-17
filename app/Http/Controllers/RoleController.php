<?php

namespace App\Http\Controllers;

use App\Http\Resources\RoleCollection;
use App\Http\Resources\RoleResource;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RoleController extends Controller
{
    private $newRow;

    public function index()
    {
        return new RoleCollection(Role::with('parentRole')->get());
    }

    public function store(Request $request, Role $role)
    {
        DB::transaction(function() use($request, $role){
            $rowNum = $role->max('sequence');
            $this->newRow = $role->create([
                'role_name' => $request->name,
                'parent_role' => $request->parentRole,
                'home_page' => $request->homePage,
                'sequence' => $rowNum + 1,
                'status' => $request->status,
                'created_by' => 1,
                'updated_by' => 1,
                'deleted_by' => 1,
            ]);

        });
        return new RoleResource($this->newRow);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role)
    {
        $updatedRole = $role->update([
            'role_name' => $request->name,
            'parent_role' => $request->parentRole,
            'home_page' => $request->homePage,
            'status' => $request->status,
            'updated_by' => 1,
        ]);

        return new RoleResource($role);

    }

}
