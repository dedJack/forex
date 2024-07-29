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
            <div className='layout'>
                <aside className='sideBar'>
                    <header className='panel'>
                        <h2 className='title'>ADMIN PANEL</h2>
                    </header>
                    <ul className="menu-items">
                        <li onClick={handleListItemClick}>
                            <NavLink className="items" to="/Admin/AdminUsers">
                                <FaUsers className="mx-2 fs-5" />
                                Users
                            </NavLink>
                        </li>
                        <li onClick={handleListItemClick}>
                            <NavLink className="items" to="/Admin/AdminReview">
                                <MdReviews className="mx-2 fs-5" />
                                Reviews
                            </NavLink>
                        </li>
                        <li onClick={handleListItemClick}>
                            <NavLink className="items" to="/Admin/AdminEnquiry">
                                <SiFormspree className="mx-2 fs-5" />
                                Enquiry
                            </NavLink>
                        </li>
                        <li onClick={handleListItemClick}>
                            <NavLink className="items" to="/">
                                <HiMiniHome className="mx-2 fs-5" />
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </aside>
                <div className={`information ${showInformation && location.pathname === '/Admin' ? '' : 'd-none'}`}>
                    Welcome to the Admin Panel.. <br /> We Offer You collections Of FOREX.
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default AdminLayout
