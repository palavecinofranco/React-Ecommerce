import React from 'react'
import "./dropDownFilter.css"

function DropdownFilter({title, content}) {

  return (
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle drop-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {title}
  </button>
  <ul className="dropdown-menu">
    {
        content.map((link)=><li key={link.id}><a className="dropdown-item" href="/">{link.title}</a></li>)
    }
  </ul>
</div>
  )
}

export default DropdownFilter