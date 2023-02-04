import React, { useContext } from 'react'
import "./itemDetail.css"
import ItemCount from '../../ItemCount/ItemCount'
import EnvioGratis from '../../EnvioGratis/EnvioGratis'
import { Link } from 'react-router-dom'
import Button from '../../Button/Button'
import { cartContext } from '../../../storage/cartContext'

function ItemDetail({title, image, detail, price, onAddToCart, stock, quantity, id, discount}) {

  const {isInCart} = useContext(cartContext);
  let priceWithDiscount = price-(price*discount/100);

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
            {
              discount!==0&&<><span className="discount-msg">Descuento %{discount}</span><br/></>
            }
          </div>
        {
          discount===0?<p className='detail-price'>${price}</p>
          :
          <div className='price-container'>
            <span className="detail-price detail-price-modified">${price}</span>
            <span className="discount-price">${priceWithDiscount}</span>
          </div>
        }
        {
          isInCart(id)?<div className='btn-container'><Link to="/cart"><Button color="black" backgroundColor="orange">Ir al carrito</Button></Link></div>
          :
          <div>
            <ItemCount className="itemcount-container" onAddToCart={onAddToCart} stock={stock} quantity={quantity}/><small className='disponibles'>Disponibles: {stock}</small>
          </div>
        }
        </div>
    </div>
  )
}

export default ItemDetail