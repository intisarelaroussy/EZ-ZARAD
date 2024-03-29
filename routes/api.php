<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FournisseurController;
use App\Http\Controllers\MarcheController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('Fournisseurs',[FournisseurController::class,'index']);
Route::post('Fournisseurs', [FournisseurController::class , 'store']);
Route::delete('Fournisseurs/{fournisseur}', [FournisseurController::class, 'destroy']);
Route::put('Fournisseurs/{fournisseur}', [FournisseurController::class, 'update']);
Route::get('Fournisseurs/{fournisseur}', [FournisseurController::class, 'show']);
Route::post('marches', [MarcheController::class,'storeMarche']);
