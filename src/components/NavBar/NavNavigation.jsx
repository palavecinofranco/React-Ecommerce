import React, { useState } from 'react'
import CartWidget from "./CartWidget/CartWidget"
import "./navBar.css"
import logo from "./logonike.svg"
import { Link } from "react-router-dom";
import { Hidden, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function NavNavigation() {

  const [buttonState, setButtonState] = useState(false);

  function openMenu(){
    if(buttonState===false){
      setButtonState(true)
    } else{
      setButtonState(false)
    }
  }

  return (
    <>
      <nav className="header-nav">
            <Link to={"/"}><img src={logo} alt="logo" width={150} className="logoNike"/></Link>
            <Hidden smDown>
            <ul className='nav-ul'>
                <li className='nav-li'><Link className="nav-link" to={"/productos"}>Productos</Link></li>
                <li className='nav-li'><Link className="nav-link" to={"/"}>Tiendas</Link></li>
                <li className='nav-li li-carrito'><Link className="nav-link-cart" to={"/cart"}><CartWidget /></Link></li>
            </ul>
            </Hidden>
            <Hidden smUp>
              <IconButton onClick={openMenu}>
                <MenuIcon></MenuIcon>
              </IconButton>
            </Hidden>
      </nav>
      <nav className='nav-menu'>
          <li className='nav-li'><Link className="nav-link" to={"/productos"}>Productos</Link></li>
          <li className='nav-li'><Link className="nav-link" to={"/"}>Tiendas</Link></li>
          <li className='nav-li li-carrito'><Link className="nav-link-cart" to={"/cart"}><CartWidget /></Link></li>
        </nav>
      {
       buttonState && 
        <nav className='nav-menu nav-animation'>
          <li className='nav-li'><Link className="nav-link" to={"/productos"}>Productos</Link></li>
          <li className='nav-li'><Link className="nav-link" to={"/"}>Tiendas</Link></li>
          <li className='nav-li li-carrito'><Link className="nav-link-cart" to={"/cart"}><CartWidget /></Link></li>
        </nav>
      }
      </>
  )
}

export default NavNavigation