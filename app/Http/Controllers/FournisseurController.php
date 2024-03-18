<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\fournisseur;
class fournisseurController extends Controller
{
    public function index(){
        return fournisseur::all();
    }
    public function store(fournisseur $fournisseur){
    
        $fournisseur = fournisseur::create([
            'name'=>$Request->name,
            'villeF'=>$Request->name,
            'telF'=>$Request->name
        ]);
        return $fournisseur;
    }
    public function show(fournisseur $fournisseur){
        return $fournisseur;
    }
    public function update(Request $Request){
        $fournisseur ->update([
            'name'=>$Request->name,
            'villeF'=>$Request->name,
            'telF'=>$Request->name
        ]);
        return $fournisseur;
    }
    public function destroy(fournisseur $fournisseur){
        $fournisseur->delete();
        return['message'=>'tu supprime fournisseur'];
    }
}
