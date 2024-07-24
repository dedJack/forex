import React, { useContext } from 'react'
import noteContext from '../context/noteContext'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {

  const context = useContext(noteContext);
  const { user, logoutUser } = context;

  let location = useLocation();

  React.useEffect(() => {
  }, [location]);
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg fs-4 navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fs-4 " to="/">FOREX</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/Benefits' ? 'active' : ''}`} to="/Benefits">Benefits</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`} to="/About">About</Link>
              </li>
            </ul>
            <form className="d-flex mx-3" >

              <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Action
                </button>
                <ul className="dropdown-menu bg-secondary ">
                  {
                    user ? (
                      <>
                      <li>
                        <Link className="dropdown-item text-white" to="/" onClick={logoutUser} >logout</Link>
                      </li>
                      </>
                    ) : (
                      <>
                      <li>
                        <Link className="dropdown-item text-white" to="/Login" >login</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/Signup" >signup</Link>
                      </li>
                      </>
                    )
                  }
                </ul>
              </div>

            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
