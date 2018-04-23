<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Module extends Model
{
    use SoftDeletes;

    protected $fillable = ['module_name', 'sequence', 'status', 'created_at', 'updated_at', 'created_by', 'updated_by' ,'deleted_by'];

    protected $dates = ['deleted_at'];

    protected $casts = [
        'id' => 'integer',
        'status' => 'boolean'
    ];
}
