import React from 'react'
import "./itemList.css"


function ItemList(props) {
  return (
    <div className='item-container container'>{props.children}</div>
  )
}

export default ItemList