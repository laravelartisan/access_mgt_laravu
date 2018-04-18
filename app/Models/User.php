<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_code', 'role_id', 'username', 'first_name', 'last_name', 'email', 'password', 'status', 'sequence', 'created_by', 'updated_by', 'deleted_by',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'id' => 'integer',
        'role_id' => 'integer',
        'status' => 'boolean'
    ];


    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}
