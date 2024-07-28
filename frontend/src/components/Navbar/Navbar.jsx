

import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'

import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

import { FaUserAlt } from "react-icons/fa";
const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token ,setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  return (
    <div className='navbar'>

      <h1 className='head'> BITEBUDDY</h1>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>Contact us</a>
      </ul>
      <div className="navbar-right">
     
        <Link to='/cart' className='navbar-search-icon'>
        <FaCartPlus /> 
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
          : <div className='navbar-profile'>
      <FaUserAlt />
            <ul className='navbar-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')}> <FaCartPlus /> <p>Orders</p></li>
              <hr />
              <li onClick={logout}> <MdOutlineLogout />
              <p>Logout</p></li> 
            </ul>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar
