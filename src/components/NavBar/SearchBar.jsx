import React from 'react'
import "./searchBar.css"

function SearchBar() {
  return (
    <div className='searchbar-container'>
        <nav className="navbar bg-transparent">
        <form className="container-fluid">
            <div className="input-group">
                <span className="input-group-text" id="basic-addon1"><button className='btn-busqueda'><i className="bi bi-search"></i></button></span>
                <input type="text" className="form-control" placeholder="Buscar..." aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
        </form>
        </nav>
    </div>
  )
}

export default SearchBar