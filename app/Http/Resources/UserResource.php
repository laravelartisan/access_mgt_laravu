<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use Illuminate\Http\Resources\MissingValue;

class UserResource extends Resource
{

    private function relationalIds($relation, $resourceCollection)
    {
        if(!$this->whenLoaded($relation) instanceof  MissingValue){
            $relationalIds = $resourceCollection->map(function($relationalItem, $key){
                return $relationalItem->id;
            });
        }else{
            $relationalIds = $this->{$relation}->map(function($relationalItem, $key){
                return $relationalItem->id;
            });
        }

        return $relationalIds;
    }
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        $roleIds = $this->relationalIds('roles', RoleResource::collection($this->whenLoaded('roles')));

        return [
            'id' => (int)$this->id,
            'userCode' => $this->user_code,
            'userName' => $this->username,
            'firstName' => $this->first_name,
            'lastName' => $this->last_name,
            'fullName' => $this->first_name.' '.$this->last_name,
            'email' => $this->email,
            'roles' => $roleIds,
            'status' => $this->status,
            'createdAt' => date_format($this->created_at, 'Y/m/d'),
            'updatedAt' => date_format($this->updated_at, 'Y/m/d')
        ];
    }
}
