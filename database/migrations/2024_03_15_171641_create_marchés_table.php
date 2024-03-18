<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
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

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('marchés');
    }
};
