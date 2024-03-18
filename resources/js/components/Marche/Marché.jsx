import { Link } from 'react-router-dom';
import React from 'react';

export default function Marche() {
  return (
    <div>
      <nav className="navbar text-secondary justify-content-between">
        <h3>Dashboard</h3>
        <button  id="btn" className="btn "><Link to="/Creat">Nouveau Marché </Link></button>
      </nav>
      <form>
        <input className="form-control -mb-2 " type="search" placeholder="Recherche" aria-label="Search"/>
        <button className="btn btn-outline-info " >Recherche</button>
      </form>
      <div >
      <h5 className='text-center'>Les Marchés En Cours </h5>
      <br></br>
      <table className="table table-dark table-striped " >
        <thead>
        <tr >
          <th scope="col" className=''>Non de Marché</th>
          <th scope="col">Non D'entreprise</th>
          <th scope="col">Région</th>
          <th scope="col">Ville</th>
          <th scope="col">Date finale de la Livraison</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">MarchéRabat</th>
          <td>Ist hay riyad</td>
          <td>Rabat-asle-kenitr</td>
          <td>Rabat</td>
          <td>2024/10/14</td>
          <td><button className='btn bg-success'><a href='#' className='text-light'>En Cour</a></button>
          <button className='btn bg-danger'><a href='#' className='text-light'>Supprimer</a></button></td>
        </tr>
        
      </tbody>
      </table>
    </div>
  </div>
  )
}

