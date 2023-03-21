import React from 'react'
import { useCartContext } from '../../storage/cartContext';

import "./itemCart.css"
import Button from '../Button/Button';

function ItemCart({item}) {
    const { removeItem, addQuantity, subtractQuantity, getPriceWithDiscount, getSubTotalPrice } = useCartContext();
    const {image, title, price, quantity, idProduct, stock, discount} = item;

  return (
    <div className='itemcart-container'>
      <div className='itemcart-details'>
        <div className='itemcart-img-container'>
          <img src={image} className="itemcart-image" alt={title}/>
        </div>
        <div className='item-properties-container'>
          <h4 className='itemcart-title'>{title.toUpperCase()}</h4>
          {
            discount?<div><small className='itemcart-price-modified'>${price}</small><h4 className='itemcart-price'>${getPriceWithDiscount(idProduct)}</h4></div>
            :
            <h4 className='itemcart-price'>${price}</h4>
          }
          <span>Subtotal: ${getSubTotalPrice(idProduct)}</span>
        </div>
      </div>
        <div className='count-container'>CantidProductad
          {
            quantity===stock?<Button disabled={true} onClick={()=>addQuantity(idProduct)}>+</Button>
            :
            <Button onClick={()=>addQuantity(idProduct)}>+</Button>
          }
          <h3 className='itemcart-cantidProductad'>{quantity}</h3>
          {
            quantity===1?<Button disabled={true} onClick={()=>subtractQuantity(idProduct)}>-</Button>
            :
            <Button onClick={()=>subtractQuantity(idProduct)}>-</Button>
          }
        </div>
        <button onClick={() => removeItem(idProduct)} className="remove-btn">
            <i className="fa-solidProduct fa-trash"></i>
        </button>
  </div>
  )
}

export default ItemCart