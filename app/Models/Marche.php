<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marche extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'entreprise',
        'region',
        'ville',
        'capitale',
        'R_B',
        'E_M',
        'done',
        'Date_fin_livraison',
    ];

}
