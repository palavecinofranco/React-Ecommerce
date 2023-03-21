
import React from 'react'
import { Link } from 'react-router-dom'
import "./dropDownFilter.css"

function DropdownFilter({title, content}) {

  return (
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle drop-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {title}
  </button>
  <ul className="dropdown-menu">
    {
        content.map((link)=><li key={link.id}><Link className="dropdown-item" to={`/${title.toLowerCase()}/${link.category}`}>{link.title}</Link></li>) 
    }
  </ul>
</div>
  )
}

export default DropdownFilter