import React from 'react'
import { cartContext } from '../../storage/cartContext';
import { useContext } from 'react';
import "./itemCart.css"

function ItemCart({item}) {
    const { removeItem } = useContext(cartContext);
    const {image, title, price, quantity, id} = item;

  return (
    <div className='itemcart-container'>
      <div className='itemcart-details'>
        <img src={image} className="itemcart-image" width={80}/>
        <div className='item-properties-container'>
          <h4 className='itemcart-title'>{title}</h4>
          <h4 className='itemcart-price'>${price}</h4>
        </div>
      </div>
        <div className='count-container'>Cantidad<h3 className='itemcart-cantidad'>{quantity}</h3></div>
        <button onClick={() => removeItem(id)} className="remove-btn">
            <i className="fa-solid fa-trash"></i>
        </button>
  </div>
  )
}

export default ItemCart