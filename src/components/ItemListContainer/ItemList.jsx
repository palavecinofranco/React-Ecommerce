import React from 'react'


function ItemList(props) {
  return (
    <div className='flex-container'>{props.children}</div>
  )
}

export default ItemList