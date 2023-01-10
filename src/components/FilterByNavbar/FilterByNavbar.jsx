import React from 'react'
import { Link } from 'react-router-dom'
import "./filter.css"

function FilterByNavbar() {
  return (
    <div className='filter-container'>
        <ul className='filter-ul'>
            <li className='filter-item'><Link className='filter-link' to={"category/indumentaria"}>Indumentaria</Link></li>
            <li className='filter-item'><Link className='filter-link' to={"category/calzados"}>Calzados</Link></li>
            <li className='filter-item'><Link className='filter-link' to={"category/accesorios"}>Accesorios</Link></li>
        </ul>
    </div>
  )
}

export default FilterByNavbar;