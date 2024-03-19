<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\fournisseur;

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

        // Return just a  message : 'fournisseur created'
        return response()->json(['message' => 'fournisseur created'], 201);
    }
    public function show(fournisseur $fournisseur)
    {
        return $fournisseur;
    }
    public function destroy(fournisseur $fournisseur)
    {
        $fournisseur->delete();
        return 'fournisseur deleted';
    }
    public function update(Request $request, fournisseur $fournisseur)
    {
        $fournisseur->update($request->all());
        return 'fournisseur updated';
    }
}
