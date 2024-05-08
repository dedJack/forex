import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {

  let location = useLocation();

  React.useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <div>

      <nav className=" navbar navbar-expand-lg z-3 navbar-dark bg-dark" style={{ height: '59px' }}>
        <div className="container-fluid fs-4" >
          <Link className="navbar-brand fs-1  " to="/">FOREX</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse navbar-dark bg-dark" id="navbarSupportedContent">
            <div className="navbar-nav">
              <Link className={`nav-link ${location.pathname=== '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
              <Link className={`nav-link ${location.pathname === '/Benefits' ? 'active' : ''}`} to="/Benefits">Benefits</Link>
              <Link className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`} to="/About">About</Link>
              {/* <Link className="nav-link disabled" aria-disabled="true">Disabled</Link> */}
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
