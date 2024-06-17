import React, { useContext } from 'react'
import noteContext from '../context/noteContext'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {

  const context = useContext(noteContext);
  const { user,logoutUser } = context;

  let location = useLocation();

  React.useEffect(() => {
  }, [location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">FOREX</Link>
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
            <form className="d-flex" >
              {
                user ? (
                  <>
                    <Link className="btn btn-primary mx-1" to="/" onClick={logoutUser} role="button">logout</Link>
                  </>
                ) : (
                  <>
                  <Link className="btn btn-primary mx-1" to="/Login" role="button">login</Link>
                  <Link className="btn btn-primary mx-1" to="/Signup" role="button">signup</Link>
                  </>
                )
              }
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
