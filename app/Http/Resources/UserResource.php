<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class UserResource extends Resource
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
            'id' => (int)$this->id,
            'userCode' => $this->user_code,
            'userName' => $this->username,
            'firstName' => $this->first_name,
            'lastName' => $this->last_name,
            'fullName' => $this->first_name.' '.$this->last_name,
            'email' => $this->email,
//            'role' => $this->role_id,
//            'roleName' => isset($this->role)?$this->role:null,
            'status' => $this->status,
            'createdAt' => date_format($this->created_at, 'Y/m/d'),
            'updatedAt' => date_format($this->updated_at, 'Y/m/d')
        ];
    }
}
