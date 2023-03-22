import React from 'react'
import { useCartContext } from '../../storage/cartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import "./itemCart.css"
import Button from '../Button/Button';
import { IconButton } from '@mui/material';

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
        <div className='count-container'>Cantidad
          {
            quantity===stock?<Button disabled={true} onClick={()=>addQuantity(idProduct)}>+</Button>
            :
            <Button onClick={()=>addQuantity(idProduct)}>+</Button>
          }
          <h3 className='itemcart-cantidad'>{quantity}</h3>
          {
            quantity===1?<Button disabled={true} onClick={()=>subtractQuantity(idProduct)}>-</Button>
            :
            <Button onClick={()=>subtractQuantity(idProduct)}>-</Button>
          }
        </div>
        <IconButton className='remove-btn' aria-label="delete" onClick={()=> removeItem(idProduct)}>
          <DeleteIcon />
        </IconButton>
  </div>
  )
}

export default ItemCart