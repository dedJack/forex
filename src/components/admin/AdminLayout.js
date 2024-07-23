import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { FaUsers} from "react-icons/fa";
import { SiFormspree } from "react-icons/si";
import { MdReviews } from "react-icons/md";
import { HiMiniHome } from "react-icons/hi2";
import noteContext from '../../context/noteContext';
import { useContext } from 'react';

const AdminLayout = () => {

    const context = useContext(noteContext);
    const {user, isLoading} = context;

    if(isLoading){
        return <h1>Loading...</h1>
    }

    console.log("User data : ",user)
    if(!user.isAdmin){
        return <Navigate to='*' />
    }
    return (
        <>
            <header className='panel'>
            <h2 className='title'>ADMIN PANEL</h2>
            <div className="admin-grid container">
                <nav className='menu nav flex-column fs-3'>
                    <ul className='menu-items'>
                        <li >
                            <FaUsers className='mx-2 fs-5' />
                            <NavLink className='items' to='/Admin/AdminUsers' >Users</NavLink>
                        </li>
                        <li>
                            <MdReviews className='mx-2 fs-5' />
                            <NavLink className='items' to='/Admin/AdminReview' >Reviews</NavLink>
                        </li>
                        <li >
                            <SiFormspree className='mx-2 fs-5' />
                            <NavLink className='items' to='/Admin/AdminEnquiry' >Enquiry</NavLink>
                        </li>
                        <li >
                        <HiMiniHome className='mx-2 fs-5'/>
                            <NavLink className='items' to='/' >Home</NavLink>
                        </li>
                    </ul>
                </nav>
                {/* <div className="information">
                    Welcome to the Admin Panel.. <br /> We Offer You collections Of FOREX.
                </div> */}
            </div>
            </header>
            <Outlet />
        </>
    )
}

export default AdminLayout
