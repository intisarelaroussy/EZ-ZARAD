import React from 'react'

export default function Create() {
  return (
    <div>
      <nav className="navbar text-secondary justify-content-between">
      <h3 >Nouveau Marché</h3>
      </nav>
      <div id="Prodouts"  >
      <h5 className='text-center'>Créer Un Nouveau Marché</h5>
      <br></br>
      <form>
      <div className='row'>
      <div className='col-6'><div className="mb-1">
          <label  class="form-label">Nom Marché</label>
          <input type="text" class="form-control" />
        </div>
        <div className="mb-3">
          <label  class="form-label">Nom Entreprise</label>
          <input type="text" class="form-control" />
        </div>
        <div className="mb-3">
          <label  class="form-label">Région</label>
          <input type="text" class="form-control" />
        </div>
        <div className="mb-3">
          <label  class="form-label">Ville</label>
          <input type="text" class="form-control" />
        </div>
        <div className="mb-3">
        <label  class="form-label">Capitale</label>
        <input type="number" class="form-control" />
        </div>
        </div>
      <div className='col-6'>
        <br></br>
       
        <div className="mb-3">
            <label  class="form-label">Date finale de Livraison</label>
            <input type="date" class="form-control" />
          </div>
          <div className="mb-3 ">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">La Reponse de la Banque </label>
        </div>
        <div className="mb-3 ">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label"> Enregistrer Marché</label>
        </div>
          
      
      </div>
      </div>
    
      <button type="submit" id='btn' className="  form-control">Valid</button>
    </form>
    </div>
  </div>
  )
}
