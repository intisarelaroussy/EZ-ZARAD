<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FournisseurController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('Fournisseurs',[FournisseurController::class,'index']);
Route::post('Fournisseurs', [FournisseurController::class , 'store']);
Route::delete('Fournisseurs/{fournisseur}', [FournisseurController::class, 'destroy']);
Route::put('Fournisseurs/{fournisseur}', [FournisseurController::class, 'update']);
Route::get('Fournisseurs/{fournisseur}', [FournisseurController::class, 'show']);
