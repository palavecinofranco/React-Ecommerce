import React from 'react'
import "./itemDetail.css"
import ItemCount from '../../ItemCount/ItemCount'

function ItemDetail({title, image, detail, price, onAddToCart}) {

  return (
    <div className="detail-container">
        <div className="container-img">
            <img src={image} alt={title} className="card-img"/>
        </div>
        <h4>{title}</h4>
        <small>{detail}</small>
        <p>{price}</p>
        <ItemCount onAddToCart={onAddToCart}/>
    </div>
  )
}

export default ItemDetail