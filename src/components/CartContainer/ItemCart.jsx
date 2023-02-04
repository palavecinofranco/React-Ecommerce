import React from 'react'
import { useCartContext } from '../../storage/cartContext';

import "./itemCart.css"
import Button from '../Button/Button';

function ItemCart({item}) {
    const { removeItem, addQuantity, subtractQuantity, getPriceWithDiscount, getSubTotalPrice } = useCartContext();
    const {image, title, price, quantity, id, stock, discount} = item;

  return (
    <div className='itemcart-container'>
      <div className='itemcart-details'>
        <div className='itemcart-img-container'>
          <img src={image} className="itemcart-image" alt={title}/>
        </div>
        <div className='item-properties-container'>
          <h4 className='itemcart-title'>{title.toUpperCase()}</h4>
          {
            discount?<div><small className='itemcart-price-modified'>${price}</small><h4 className='itemcart-price'>${getPriceWithDiscount(id)}</h4></div>
            :
            <h4 className='itemcart-price'>${price}</h4>
          }
          <span>Subtotal: ${getSubTotalPrice(id)}</span>
        </div>
      </div>
        <div className='count-container'>Cantidad
          {
            quantity===stock?<Button disabled={true} onClick={()=>addQuantity(id)}>+</Button>
            :
            <Button onClick={()=>addQuantity(id)}>+</Button>
          }
          <h3 className='itemcart-cantidad'>{quantity}</h3>
          {
            quantity===1?<Button disabled={true} onClick={()=>subtractQuantity(id)}>-</Button>
            :
            <Button onClick={()=>subtractQuantity(id)}>-</Button>
          }
        </div>
        <button onClick={() => removeItem(id)} className="remove-btn">
            <i className="fa-solid fa-trash"></i>
        </button>
  </div>
  )
}

export default ItemCart