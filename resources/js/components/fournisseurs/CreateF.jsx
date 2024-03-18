import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function CreateF() {
  const [nameF ,setnameF] = useState('');
  const [villeF ,setvilleF] = useState('');
  const [ telF ,settelF] = useState('');
  const navigate = useNavigate();

  const AddF = async (e) => {
    e.preventDefault() ;
    const Fournisseur = {
      nameF,
      villeF,
      telF
    };
    try{
      await axios.post('/Api/Fournisseurs',Fournisseur);
      navigate('/')
      console.log('bravo')
    }catch(error){
      console.log(error)
    }
  }
  
  return (
        <div>
      <nav className="navbar text-secondary justify-content-between">
      <h3 >Nouveau Fournisseur</h3>
      </nav>
      <div id="Prodouts">
        <h5 className='text-center'>Créer Un Nouveau Fournisseur</h5>
        <br></br>
        <form onSubmit={(e) => AddF(e)}>
          <div className="mb-3">
            <label  className="form-label">Nom et Prénon </label>
            <input type="text" className="form-control" value={nameF}  onChange={(e) => setnameF(e.target.value)}/>
          </div>
          <br></br>
          <div className="mb-3">
            <label  className="form-label">Ville De Fournisseur</label>
            <input type="text" className="form-control"  value={villeF}  onChange={(e) => setvilleF(e.target.value)}/>
          </div>
          <br></br>
          <div className="mb-3">
            <label  className="form-label">Télephone</label>
            <input type="text" className="form-control" value={telF}  onChange={(e) => settelF(e.target.value)}/>
          </div>
          <br></br>
        
            <button type="submit" id='btn' className="  form-control">Valid</button>
          </form>
        </div>
    </div>
  )
}
