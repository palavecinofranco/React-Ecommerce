import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import {FreeMode} from "swiper"
import "swiper/css"
import "swiper/css/free-mode"
import { useEffect, useState } from 'react'
import Item from '../ItemListContainer/Item/Item'
import "./featuredProducts.css"

function FeaturedProducts({list, children}) {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    list()
        .then((respuesta)=>{
          setProducts(respuesta)
            })
            .catch((error) => alert(error))
  },[])

  return (
    <div className='container-fluid justify-content-center mt-5 item-featured-container'>
      <h2 className='featured-title'>{children}</h2>
      <Swiper 
      freeMode={true} 
      grabCursor={true}
      modules={[FreeMode]} 
      className="Swiper" 
      breakpoints={{
        0:{
          slidesPerView: 1,
          spaceBetween: 40
        },
        370:{
          slidesPerView: 1,
          spaceBetween: 0
        },
        410:{
          slidesPerView : 1.2,
          spaceBetween : 10
        },
        480:{
          slidesPerView : 1.7,
          spaceBetween : 70
        },
        530:{
          slidesPerView : 2,
          spaceBetween : 100
        },
        600:{
          slidesPerView : 2,
          spaceBetween : 20
        },
        680:{
          slidesPerView : 2.2,
          spaceBetween : 30
        },
        808:{
          slidesPerView : 2.7,
          spaceBetween : 5
        },
        1024:{
          slidesPerView : 3.5,
          spaceBetween : 5
        },
        1280:{
          slidesPerView: 4.7,
          spaceBetween: 10
        }
      }}
      >
        {
          products.map((product)=>{
              return(
                <SwiperSlide key={product.id}>
                  <Item item={product}/>
                </SwiperSlide>
              )
            })
          }
      </Swiper>
    </div>
  )
}

export default FeaturedProducts