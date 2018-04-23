<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Menu extends Model
{
    use SoftDeletes;

    protected $fillable = ['menu_name', 'module_id', 'parent_menu', 'menu_route_name', 'sequence', 'status', 'created_at', 'updated_at', 'created_by', 'updated_by' ,'deleted_by'];

    protected $casts = [
        'id' => 'integer',
        'parent_menu' => 'integer',
        'module_id' => 'integer',
        'status' => 'boolean'
    ];

    protected $dates = ['deleted_at'];

    public function parentMenu()
    {
        return $this->belongsTo(Menu::class);
    }
}
