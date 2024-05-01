import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>

      <nav className=" navbar navbar-expand-lg z-3 navbar-dark bg-dark" style={{ height: '59px' }}>
        <div className="container-fluid fs-4" >
          <Link className="navbar-brand fs-1  " to="/">FOREX</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse navbar-dark bg-dark" id="navbarSupportedContent">
            <div className="navbar-nav">
              <Link className="nav-link active  mx-1" aria-current="page" to="/">Home</Link>
              <Link className="nav-link   mx-2 " to="/Benefits">Benefits</Link>
              <Link className="nav-link  mx-2" to="/About">About</Link>
              {/* <Link className="nav-link disabled" aria-disabled="true">Disabled</Link> */}
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
