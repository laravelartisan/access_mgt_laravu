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
            'fullName' => $this->first_name.' '.$this->last_name,
            'email' => $this->email,
            'role' => isset($this->role)?$this->role:'N/A',
            'status' => $this->status,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
