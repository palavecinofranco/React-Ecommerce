import React from 'react'
import BeginningSectionImg from '../components/BeginningSectionImg/BeginningSectionImg'
import FilterByNavbar from '../components/FilterByNavbar/FilterByNavbar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

function HomePage() {
  return (
    <>
        <BeginningSectionImg/>
        <FilterByNavbar/>
        <ItemListContainer/>
    </>
  )
}

export default HomePage