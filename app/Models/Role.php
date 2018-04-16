<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{

    protected $casts = [
        'id' => 'integer',
        'parent_role' => 'integer',
        'home_page' => 'integer',
        'status' => 'boolean'
    ];

    public function parentRole()
    {
        return $this->belongsTo(Role::class);
    }
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
