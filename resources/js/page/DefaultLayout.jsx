import React from 'react'
import { Link,  Outlet } from 'react-router-dom'



export default function DefaultLayout() {

  return (
    <div id="defaultLayout">
       <aside>
       <br></br>
        <Link to="/">Dashboard</Link>
        <br></br>
        <Link to="/Fournisseurs">List Fournisseurs</Link>
        <br></br>
        <Link to="/Produits">List Produits</Link>
        <br></br>
        <Link to="/Creat">Noueaux Marché </Link>
        <br></br>
        <Link to="/CreateP">Nouveau produits</Link>
        <br></br>
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
