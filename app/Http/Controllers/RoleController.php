<?php

namespace App\Http\Controllers;

use App\Http\Resources\RoleCollection;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index()
    {
        return new RoleCollection(Role::with('parentRole')->get());
    }

    public function store(Request $request, Role $role)
    {
        $rowNum = $role->max('sequence');

        $newRow = $role->create([
            'role_name' => $request->name,
            'parent_role' => $request->parentRole,
            'home_page' => $request->homePage,
            'sequence' => $rowNum + 1,
            'status' => $request->status,
            'created_by' => 1,
            'updated_by' => 1,
            'deleted_by' => 1,
        ]);

        return new UserResource($newRow);
    }
}
