import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateF() {
  const [nameF, setNameF] = useState('');
  const [villeF, setVilleF] = useState('');
  const [telF, setTelF] = useState('');
  const navigate = useNavigate();

  const AddF = async () => {
    try{
        const Fournisseur = {
            nameF:'nameF',
            villeF:'villeF',
            telF:'0099893'
        };
        const res = await fetch(`/api/fournisseurs`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(Fournisseur)
        });
        const data = await res.json();
        console.log(data);
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <nav className="navbar text-secondary justify-content-between">
        <h3>Nouveau Fournisseur</h3>
      </nav>
      <div id="Prodouts">
        <h5 className='text-center'>Créer Un Nouveau Fournisseur</h5>
        <br></br>
        <div>
          <div className="mb-3">
            <label className="form-label">Nom et Prénon </label>
            <input type="text" className="form-control" value={nameF} onChange={(e) => setNameF(e.target.value)} />
          </div>
          <br></br>
          <div className="mb-3">
            <label className="form-label">Ville De Fournisseur</label>
            <input type="text" className="form-control" value={villeF} onChange={(e) => setVilleF(e.target.value)} />
          </div>
          <br></br>
          <div className="mb-3">
            <label className="form-label">Télephone</label>
            <input type="text" className="form-control" value={telF} onChange={(e) => setTelF(e.target.value)} />
          </div>
          <br></br>
            <button
             onClick={AddF}
             id='btn' className="  form-control">Valid</button>
          </div>
        </div>
      </div>
  );
}
