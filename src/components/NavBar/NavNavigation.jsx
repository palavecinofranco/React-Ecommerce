import React, { useState } from 'react'
import CartWidget from "./CartWidget/CartWidget"
import "./navBar.css"
import logo from "./logonike.svg"
import { Link } from "react-router-dom";
import { Box, Hidden, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from './SearchBar';

function NavNavigation() {

  const [navHeight, setNavHeight] = useState("0px");

  function openMenu(){
    if(navHeight=="0px"){
      setNavHeight("140px")
    } else{
      setNavHeight("0px")
    }
  }

  return (
    <>
      <nav className="header-nav">
            <Link style={{marginRight:"80px"}} to={"/"}><img src={logo} alt="logo" width={150} className="logoNike"/></Link>
            <Hidden mdDown>
              <SearchBar/>
            </Hidden>
            <Hidden smDown>
            <ul className='nav-ul'>
                <li className='nav-li'><Link className="nav-link" to={"/productos"}>Productos</Link></li>
                <li className='nav-li'><Link className="nav-link" to={"/sucursales"}>Sucursales</Link></li>
                <li className='nav-li li-carrito'><Link className="nav-link-cart" to={"/cart"}><CartWidget /></Link></li>
            </ul>
            </Hidden>
            <Hidden smUp>
              <IconButton onClick={openMenu}>
                <MenuIcon color='warning' fontSize='large'></MenuIcon>
              </IconButton>
            </Hidden>
      </nav>
      <nav className='nav-menu' style={{height:navHeight, backgroundColor:"#222"}}>
          <li className='nav-li li-responsive' onClick={openMenu}><Link className="nav-link" to={"/productos"}>Productos</Link></li>
          <li className='nav-li li-responsive' onClick={openMenu}><Link className="nav-link" to={"/sucursales"}>Sucursales</Link></li>
          <li className='nav-li li-responsive li-carrito' onClick={openMenu}><Link className="nav-link-cart" to={"/cart"}><CartWidget /></Link></li>
        </nav>
        <Hidden mdUp>
            <Box sx={{backgroundColor:"#000"}}>
              <SearchBar></SearchBar>
            </Box>
          </Hidden>
        </>
  )
}

export default NavNavigation