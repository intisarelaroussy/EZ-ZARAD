<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Marché;

/*
const [formData, setFormData] = useState({
        nomMarche: '',
        nomEntreprise: '',
        region: '',
        ville: '',
        capitale: '',
        dateLivraison: '',
        reponseBanque: false,
        enregistrerMarche: false
    });
*/
/*
public function up(): void
    {
        Schema::create('marchés', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('entreprise');
            $table->string('region');
            $table->string('ville');
            $table->integer('capitale');
            $table->boolean('R_B')->default(0);
            $table->boolean('E_M')->default(0);
            $table->boolean('done')->default(0);
            $table->date('Date_fin_livraison');
            $table->timestamps();
        });
    }
*/
class MarcheController extends Controller
{
    public function storeMarche(Request $request)
    {
        $marche = Marché::create($request->all());
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
