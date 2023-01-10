import React from 'react'
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/mockServices';
import ItemDetail from './ItemDetail/ItemDetail';


function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    let params = useParams();

    function handleAddToCart(count ){
        console.log(`Agregarte al carrito ${count} unidades`)
      }

    useEffect( ()=>{
        getProduct(params.productid)
    .then((respuesta)=>{
        setProduct(respuesta)
    })
    .catch(error => alert(error))
    }, [])

    return(
        <ItemDetail OnAddToCart= {handleAddToCart} title={product.title} image={product.image} detail={product.detail} price={product.price}/>
    )
}

export default ItemDetailContainer