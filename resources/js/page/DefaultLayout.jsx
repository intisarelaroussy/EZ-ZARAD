import React from 'react'
import { Link,  Outlet } from 'react-router-dom'



export default function DefaultLayout() {

  return (
    <div id="defaultLayout">
    <aside>
      <Link to="/">Dashboard</Link>
      <Link to="/Fournisseurs">List Fournisseurs</Link>
      <Link to="/Produits">List Produits</Link>
        
        <Link to="/Creat">Noueaux Marché </Link>
        
        <Link to="/CreateP">Nouveau produits</Link>
        
        <Link to="/CreatF">Nouvea Fournisseur</Link>
        <p className=' p-3'>Hi </p>  
        <a  className="btn-logout btn btn-dark" href="#">Logout</a>
           
      </aside>
      <div className="content">
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}
