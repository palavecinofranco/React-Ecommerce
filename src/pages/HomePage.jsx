import React from 'react'
import BeginningSectionImg from '../components/BeginningSectionImg/BeginningSectionImg'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import FilterByNavbar from '../components/FilterByNavbar/FilterByNavbar'
import ImageWithLink from '../components/ImageLink/ImageWithLink'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import NavBar from '../components/NavBar/NavBar'
import { getFeaturedProducts, getOffProducts } from '../services/firebase'

function HomePage() {
  return (
    <>
        <BeginningSectionImg/>
        <FilterByNavbar/>
        <ItemListContainer/>
        <FeaturedProducts list={getFeaturedProducts}>Articulos Destacados</FeaturedProducts>
        <ImageWithLink image={"https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/c86fdadb-b533-4b26-9e3d-8121641481ae/sitio-web-oficial-de-nike.png"}>CAMISETAS DE FÚTBOL</ImageWithLink>
        <FeaturedProducts list={getOffProducts}>Ofertas</FeaturedProducts>
    </>
  )
}

export default HomePage