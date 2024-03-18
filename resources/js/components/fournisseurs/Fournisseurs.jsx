
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Fournisseurs() {
  const [fournisseurs , setFournisseurs] =useState([])

  const fetchFournisseurs = async () => {
    try{
      const response = await fetch('http://127.0.0.1:8000/api/Fournisseurs')
      const data = await response.json();
      setFournisseurs(data);
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchFournisseurs()
  },[])

  return (
    <div>
      <nav className="navbar text-secondary justify-content-between">
        <h3>Fournisseurs</h3>
        <button  id="btn" className="btn "> 
        <Link to="/CreatF">Nouveau Fournisseur </Link></button>
      </nav>
      <form>
        <input className="form-control -mb-2 " type="search" placeholder="Recherche" aria-label="Search"/>
        <button className="btn btn-outline-info " >Recherche</button>
      </form>
      <div >
      <h5 className='text-center'>List des Fournisseurs </h5>
      <br></br>
      <table className="table table-dark table-striped " >
        <thead>
        <tr >
          <th scope="col" className=''>id</th>
          <th scope="col">Le Non</th>
          <th scope="col">Ville</th>
          <th scope="col">Tel</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {fournisseurs?.map(F =>(
          <tr key={F.id}>
          <td>{F.id}</td>
          <td>{F.nameF}</td>
          <td>{F.villeF}</td>
          <td>{F.telF}</td>
          <td>
          <button className='btn bg-success'> <Link to="/EditF">Update </Link></button>
          <button className='btn bg-danger'><a href='#' className='text-light'>Supprimer</a></button>
          </td></tr>

        ))

      }
    </tbody>
    </table>
    </div>
  </div>
  )
}
