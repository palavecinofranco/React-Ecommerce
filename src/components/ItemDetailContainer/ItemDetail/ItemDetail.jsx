import React, { useContext } from 'react'
import "./itemDetail.css"
import ItemCount from '../../ItemCount/ItemCount'
import EnvioGratis from '../../EnvioGratis/EnvioGratis'
import { Link } from 'react-router-dom'
import Button from '../../Button/Button'
import { cartContext } from '../../../storage/cartContext'

function ItemDetail({title, image, detail, price, onAddToCart, stock, quantity, id}) {

  const {isInCart} = useContext(cartContext);
  console.log(quantity)

  return (
    <div className="detail-container">
        <div className="container-img">
            <img src={image} alt={title} className="detail-img"/>
        </div>
        <div className='info-container'>
          <div className='container-details'>
            <h4 className='detail-title'>{title.toUpperCase()}</h4>
            <small className='detail-desc'>{detail}</small>
            {
              price>=7000 && <div className='container-env'><EnvioGratis marginTop="100px"/></div>
            }
          </div>
        <p className='detail-price'>${price}</p>
        {
          isInCart(id)?<div className='btn-container'><Link to="/cart"><Button color="black" backgroundColor="orange">Ir al carrito</Button></Link></div>
          :
          <ItemCount className="itemcount-container" onAddToCart={onAddToCart} stock={stock} quantity={quantity}/>
        }
        </div>
    </div>
  )
}

export default ItemDetail