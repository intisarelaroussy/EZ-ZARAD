import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateF() {
  const [nameF, setNameF] = useState('');
  const [villeF, setVilleF] = useState('');
  const [telF, setTelF] = useState('');
  const navigate = useNavigate();

  const AddF = async () => {
<<<<<<< HEAD
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
=======
    try {
      const fournisseurData = {
        nameF: nameF,
        villeF: villeF,
        telF: telF
      };

      const res = await axios.post('http://127.0.0.1:8000/api/Fournisseurs', fournisseurData);
      if(res.data ==='message'){
        navigate('/Fournisseurs')
      }
    } catch (error) {
      console.log(error);
>>>>>>> a3f9ef0d7ffaacd53de7c1166f52f96537d2f3e4
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
<<<<<<< HEAD
            <button
             onClick={AddF}
             id='btn' className="  form-control">Valid</button>
          </div>
=======
          <button
            onClick={AddF}
            id='btn' className="  form-control">Valid</button>
>>>>>>> a3f9ef0d7ffaacd53de7c1166f52f96537d2f3e4
        </div>
      </div>
    </div>
  );
}
