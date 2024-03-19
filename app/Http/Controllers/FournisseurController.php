<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\fournisseur;
<<<<<<< HEAD
=======
use App\Http\Requests\FournisseurRequest;
>>>>>>> a3f9ef0d7ffaacd53de7c1166f52f96537d2f3e4

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

<<<<<<< HEAD
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
=======
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
>>>>>>> a3f9ef0d7ffaacd53de7c1166f52f96537d2f3e4
