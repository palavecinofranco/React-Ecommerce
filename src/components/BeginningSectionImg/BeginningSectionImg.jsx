import React from 'react'
import imgPortada from "../../Images/img-portada.jpg"
import "./beginningSectionImg.css"

function BeginningSectionImg() {
  return (
    <section className='section'>
        <div className='img-container'>
            <img src={imgPortada} alt="imagen-portada" className="img-portada"/>
        </div>
    </section>
  )
}

export default BeginningSectionImg