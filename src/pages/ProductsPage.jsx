import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import FilterByNavbar from '../components/FilterByNavbar/FilterByNavbar'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import { getFeaturedProducts } from '../services/firebase'
import NavBar from '../components/NavBar/NavBar'

function ProductsPage() {
  return (
    <>
        <FilterByNavbar/>
        <ItemListContainer/>
        <FeaturedProducts list={getFeaturedProducts}>Artículos destacados</FeaturedProducts>
    </>
  )
}

export default ProductsPage