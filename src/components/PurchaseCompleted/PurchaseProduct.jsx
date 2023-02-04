import React from 'react'
import "./purchaseProduct.css"

function PurchaseProduct({product}) {
    const {id, title, quantity, price} = product;
    function getSubTotalPrice(){
        return price * quantity;
    }

  return (
    <div className='purchase-product-container'>
        <span>{title}</span>
        <span>x {quantity}</span>
        <span>Precio: ${price}</span>
        <span>Sub total: ${getSubTotalPrice()}</span>
    </div>
  )
}

export default PurchaseProduct