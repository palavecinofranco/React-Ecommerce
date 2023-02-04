import React from 'react'
import "./userInput.css"

function UserInput({type, placeholder, onChange, title, name, value}) {
  return (
    <div className="input-container">
        <label className='input-label'>{title}</label>
        <input value={value} type={type} name={name} placeholder={placeholder} required onChange={onChange} className="input"></input>
    </div>
  )
}

export default UserInput