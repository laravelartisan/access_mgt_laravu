<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class MenuResource extends Resource
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
            'menuName' => $this->menu_name,
            'module' => $this->module_id,
            'parentMenu' => $this->parent_menu,
            'route' => $this->menu_route_name,
            'status' => $this->status,
        ];
    }
}
