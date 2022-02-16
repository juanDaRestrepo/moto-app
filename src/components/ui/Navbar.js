import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { startLogout } from '../../redux/actions/auth';

export const Navbar = () => {
   const dispatch = useDispatch(); 
  const handleLogout = () => {
    dispatch(startLogout())
  }
  return (
   
    <>
      <nav className="navbar navbar-light bg-light" >
        <div className="container-fluid">
          <NavLink      
            to="/login"
            className="navbar-brand"
            onClick={handleLogout}  
          >
            Logout
          </NavLink>
        </div>
      </nav>
    </>
  )
}
