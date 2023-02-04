import React from 'react'
import "./footer.css"
import iconoWp from "./icono-wp.svg"

function Footer() {
  return (
    <div className='footer-container'>
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 1440 320"}><path fill="#000" fillOpacity="1" d="M0,288L1440,96L1440,320L0,320Z"></path></svg>
      <footer className='footer'>
        <div className='container'>
          <div className='row'>
              <div className='col-12 col-sm-6 contact-container columna'>
                <h2 className='footer-title'>Atención al cliente</h2>
                <small>Lunes a Viernes de 8hs a 20hs / Sabados de 10hs a 17hs</small>
                <span className='footer-span'>Contacto</span>
                <i className="bi bi-envelope logo-contacto"><small className='text-contacto'>GMAIL</small></i>
                <i className="bi bi-telephone logo-contacto"><small className='text-contacto'>+54 9 1152524826</small></i>
                <img src={iconoWp} alt="logo-whatsapp" width={30}/><small className='text-wsp'>Chatea con nosotros!</small>
              </div>
              <div className='col-12 col-sm-6 redes-container columna'>
                <h2 className='footer-title'>Redes</h2>
                <i className="bi bi-instagram logo-redes"><small className='text-redes'>INSTAGRAM</small></i>
                <i className="bi bi-facebook logo-redes"><small className='text-redes'>FACEBOOK</small></i>
                <i className="bi bi-twitter logo-redes"><small className='text-redes'>TWITTER</small></i>
              </div>
              <small className='text-center'>© Derechos reservados Franco Palavecino</small>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer