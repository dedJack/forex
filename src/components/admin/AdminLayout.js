import React, { useState, useContext } from 'react'
import { Navigate, NavLink, Outlet, useLocation } from 'react-router-dom'
import { FaUsers } from "react-icons/fa";
import { SiFormspree } from "react-icons/si";
import { MdReviews } from "react-icons/md";
import { HiMiniHome } from "react-icons/hi2";
import noteContext from '../../context/noteContext';

const AdminLayout = () => {
    const [showInformation, setShowInformation] = useState(true);

    const handleListItemClick = () => {
      setShowInformation(false);
    };

    //To specify the location where the information is shown
    const location = useLocation();

    const context = useContext(noteContext);
    const { user, isLoading } = context;

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    // console.log("User data : ", user)
    if (!user.isAdmin) {
        return <Navigate to='*' />
    }

    
    return (
        <>
            <header className='panel'>
                <h2 className='title'>ADMIN PANEL</h2>
                <div className="layout admin-grid container ">
                    <nav className="menu nav flex-column fs-3">
                        <ul className="menu-items">
                            <li onClick={handleListItemClick}>
                                <FaUsers className="mx-2 fs-5" />
                                <NavLink className="items" to="/Admin/AdminUsers">
                                    Users
                                </NavLink>
                            </li>
                            <li onClick={handleListItemClick}>
                                <MdReviews className="mx-2 fs-5" />
                                <NavLink className="items" to="/Admin/AdminReview">
                                    Reviews
                                </NavLink>
                            </li>
                            <li onClick={handleListItemClick}>
                                <SiFormspree className="mx-2 fs-5" />
                                <NavLink className="items" to="/Admin/AdminEnquiry">
                                    Enquiry
                                </NavLink>
                            </li>
                            <li onClick={handleListItemClick}>
                                <HiMiniHome className="mx-2 fs-5" />
                                <NavLink className="items" to="/">
                                    Home
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    
                        <div className={`information ${showInformation && location.pathname=='/Admin' ? '' : 'd-none'}`}>
                            Welcome to the Admin Panel.. <br /> We Offer You collections Of FOREX.
                        </div>
                    
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default AdminLayout
