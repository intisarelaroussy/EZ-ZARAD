import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditF() {
  const [Fournisseur, setFournisseur] = useState({});
  const { FournisseurId } = useParams();
  const [nameF, setnameF] = useState('');
  const [villeF, setvilleF] = useState('');
  const [telF, settelF] = useState('');
  const navigate = useNavigate()

  const getFournisseur = async () => {
    try {
      const res = await fetch(/api/Fournisseurs/${FournisseurId});
      const data = await res.json();
      setFournisseur(data);
      if(data ==='fournisseur updated'){
        navigate('/Fournisseurs')
      }
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateF = async () => {
    try {
      const res = await fetch(/api/Fournisseurs/${FournisseurId}, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nameF: nameF,
          villeF: villeF,
          telF: telF
        })
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFournisseur();
    setnameF(Fournisseur.nameF);
    setvilleF(Fournisseur.villeF);
    settelF(Fournisseur.telF);
  }, []);

  return (
    <div>
      <nav className="navbar text-secondary justify-content-between">
        <h3>Update Fournisseur</h3>
      </nav>
      <div id="Prodouts">
        <h5 className='text-center'>Changement de Fournisseur</h5>
        <br></br>
        <div>
          <div className="mb-3">
            <label className="form-label">Nom et Prénom </label>
            <input
              onChange={(e) => setnameF(e.target.value)}
              type="text"
              className="form-control"
              defaultValue={Fournisseur.nameF} // Set default value
            />
          </div>
          <br></br>
          <div className="mb-3">
            <label className="form-label">Ville De Fournisseur</label>
            <input
              onChange={(e) => setvilleF(e.target.value)}
              type="text"
              className="form-control"
              defaultValue={Fournisseur.villeF} // Set default value
            />
          </div>
          <br></br>
          <div className="mb-3">
            <label className="form-label">Téléphone</label>
            <input
              onChange={(e) => settelF(e.target.value)}
              type="text"
              className="form-control"
              defaultValue={Fournisseur.telF} // Set default value
            />
          </div>
          <br></br>
          <button
            onClick={UpdateF}
            id='btn'
            className="form-control"
          >Valider</button>
        </div>
      </div>
    </div>
  )
}