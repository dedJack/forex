import React from 'react'
import { NavLink } from 'react-router-dom'
import './Contacts'

const Enroll = () => {
  return (
    <div>
      <div className='enroll my-2 '>
        <button type="button" className="reviewBtn btn btn-primary" ><NavLink className='enrollLink' to={'/Contacts'}>Enroll</NavLink></button>
        <span > REGISTER FOR FREE 1-1 APPOINTMENT </span>
      </div>
      {/* eslint-disable-next-line  */}
      <marquee className="info">IMPORTANT INFORMATION THROUGH ADMIN PANEL</marquee>
    </div>
  )
}

export default Enroll
