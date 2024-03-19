<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\fournisseur;
use App\Http\Requests\FournisseurRequest;

class FournisseurController extends Controller
{
    public function index()
    {
        return fournisseur::all();
    }

    public function store(Request $request)
    {
        // Store the data from the request
        $fournisseur = fournisseur::create([
            'nameF' => $request->input('nameF'),
            'villeF' => $request->input('villeF'),
            'telF' => $request->input('telF')
        ]);

        // Return the created resource
         return  'message';}
         public function destroy(fournisseur $fournisseur){
            $fournisseur->delete();
            return 'deleted';
        }
        public function show(fournisseur $fournisseur){return $fournisseur;}
        public function update(Request $request, fournisseur $fournisseur){
            $fournisseur->update($request->all());
            return response()->json(['message' => 'fournisseur updated']);
        }

}