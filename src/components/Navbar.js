import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav className=" navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid fs-4" >
          <Link className="navbar-brand fs-1 " to="/">FOREX</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active mx-1" aria-current="page" to="/">Home</Link>
              <Link className="nav-link mx-2 " to="/Benefits">Benefits</Link>
              <Link className="nav-link mx-2" to="/About">About</Link>
              {/* <Link className="nav-link disabled" aria-disabled="true">Disabled</Link> */}
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
