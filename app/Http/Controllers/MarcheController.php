<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Models\Marche;

class MarcheController extends Controller
{
    public function storeMarche(Request $request)
    {
        $marche = Marche::create($request->all());
        return response()->json($marche, 201);
    }

    public function index()
    {
        return Marché::all();
    }

    public function show(Marché $marche)
    {
        return $marche;
    }

    
}
