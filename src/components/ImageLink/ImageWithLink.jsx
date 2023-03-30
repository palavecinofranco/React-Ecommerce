import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import "./imageWithLink.css"
import Logo from "../../Images/logonikepipa.png"

function ImageWithLink({image, children, href}) {
  return (
    <div className='image-link-container'>
        <Link to={href} className='link-img'><img className="img-background" src={image}/><img className='link-logo' width={200} src={Logo}/><h1 className='link-title'>{children}</h1></Link>
    </div>
  )
}

export default ImageWithLink