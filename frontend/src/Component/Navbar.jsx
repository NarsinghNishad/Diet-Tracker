import React from 'react'
import { NavLink } from 'react-router-dom';
import useAppContext from '../AppContext';

const Navbar = () => {
  const {loggedin, logout} = useAppContext();

  const showoption = () =>{
    if(loggedin){
      return (
        <li className='nav-item'>
          <button className='btn btn-danger' onClick={logout}>Logout</button>
        </li>
      );
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <NavLink className="nav-link" to="home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Signup">
            Signup
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Addfooditem">
            Addfooditem
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="AddDiet">
            AddDiet
          </NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="UpdateUser">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="ManageDiet">
            ManageDiet
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="UpdateDiet">
            UpdateDiet
          </NavLink>
        </li>
        
        {showoption()}
        
      </ul>
      
    </div>
  </div>
</nav>

  )
}

export default Navbar;