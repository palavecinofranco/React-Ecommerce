import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
  const navigate = useNavigate();

  setTimeout(()=>{
    navigate("/")
  }, 4000);

  return (
    <div className='notfound-container'>
      <h1>Ups! Algo salió mal</h1>
      <small>Página no encontrada</small>
      <h4>Te estamos redirigiendo al inicio...</h4>
    </div>
  )
}

export default PageNotFound