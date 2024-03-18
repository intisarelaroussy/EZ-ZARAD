import React from 'react'

export default function EditF() {
  return (
    <div>
    <nav className="navbar text-secondary justify-content-between">
    <h3 > Update Fournisseur</h3>
    </nav>
    <div id="Prodouts">
      <h5 className='text-center'>Chengment de  Fournisseur</h5>
      <br></br>
      <form>
        <div className="mb-3">
          <label  class="form-label">Nom et Prénon </label>
          <input type="text" class="form-control" />
        </div>
        <br></br>
        <div className="mb-3">
          <label  class="form-label">Ville De Fournisseur</label>
          <input type="text" class="form-control" />
        </div>
        <br></br>
        <div className="mb-3">
          <label  class="form-label">Télephone</label>
          <input type="text" class="form-control" />
        </div>
        <br></br>
          <button type="submit" id='btn' className="  form-control">Valid</button>
        </form>
      </div>
  </div>
  )
}
