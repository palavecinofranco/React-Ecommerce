import React from 'react'
import { Link } from 'react-router-dom'
import "./filter.css"

function FilterByNavbar() {
  return (
    <div className='filter-container'>
            <Link className='filter-link ind' to={"category/indumentaria"}><span className='filter-item'>Indumentaria</span></Link>
            <Link className='filter-link cal' to={"category/calzados"}><span className='filter-item'>Calzados</span></Link>
            <Link className='filter-link acc' to={"category/accesorios"}><span className='filter-item'>Accesorios</span></Link>
    </div>
  )
}

export default FilterByNavbar;