<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class RoleResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->role_name,
            'parentRole' => $this->parent_role,
            'homePage' => $this->home_page,
            'status' => $this->status,
        ];
    }
}