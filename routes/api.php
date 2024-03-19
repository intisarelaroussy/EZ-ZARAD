<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FournisseurController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('Fournisseurs',[FournisseurController::class,'index']);
<<<<<<< HEAD
Route::post('Fournisseurs', [FournisseurController::class , 'store']);
Route::delete('Fournisseurs/{fournisseur}', [FournisseurController::class, 'destroy']);
Route::put('Fournisseurs/{fournisseur}', [FournisseurController::class, 'update']);
Route::get('Fournisseurs/{fournisseur}', [FournisseurController::class, 'show']);
=======
Route::post('Fournisseurs', [FournisseurController::class,'store']);
Route::delete('Fournisseurs/{fournisseur}',[FournisseurController::class,'destroy']);
Route::put('Fournisseurs/{fournisseur}', [FournisseurController::class, 'update']);
Route::get('Fournisseurs/{fournisseur}',[FournisseurController::class,'show']);
>>>>>>> a3f9ef0d7ffaacd53de7c1166f52f96537d2f3e4
