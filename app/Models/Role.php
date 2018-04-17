<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{

    protected $fillable = ['role_name', 'parent_role', 'home_page', 'sequence', 'status', 'created_at', 'updated_at', 'created_by', 'updated_by' ,'deleted_by'];
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
