import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='logout_div'>
        <NavLink      
            to="/login"
            className="navlink"  
        >
           Logout
        </NavLink>
    </div>
  )
}
