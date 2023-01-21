import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import FilterByNavbar from './FilterByNavbar'

function ItemListByCategory() {
  return (
    <>
        <FilterByNavbar/>
        <ItemListContainer/>
    </>
  )
}

export default ItemListByCategory