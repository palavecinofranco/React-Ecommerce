import { Hidden } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'
import "./filter.css"

function FilterByNavbar() {
  return (
    <>
    <Hidden mdDown>
      <div className='filter-container'>
            <Link className='filter-link ind' to={"/category/indumentaria"}><span className='filter-item'>Indumentaria</span></Link>
            <Link className='filter-link cal' to={"/category/calzados"}><span className='filter-item'>Calzados</span></Link>
            <Link className='filter-link acc' to={"/category/accesorios"}><span className='filter-item'>Accesorios</span></Link>
      </div>
    </Hidden>
    <Hidden mdUp>
      <Link className='link-category' to={"/category/indumentaria"}>Indumentaria</Link>
      <Link className='link-category' to={"/category/calzados"}>Calzados</Link>
      <Link className='link-category' to={"/category/accesorios"}>Accesorios</Link>
    </Hidden>
    </>
  )
}

export default FilterByNavbar;