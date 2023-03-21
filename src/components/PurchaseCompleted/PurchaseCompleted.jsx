import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { getOrder } from '../../services/firebase';
import { useCartContext } from '../../storage/cartContext';
import Loader from '../Loader/Loader';
import "./purchaseCompleted.css"
import PurchaseProduct from './PurchaseProduct';


function PurchaseCompleted() {
    let params = useParams();
    const [order, setOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        getOrder(params.orderid).then((respuesta)=>{
            setOrder(respuesta);
        })
        .catch(error => alert(error))
        .finally(() => setIsLoading(false))
    },[params])

    const {items, date, buyer, total} = order;


  return (
    <div className='container-fluid text-center'>
        <div className='title-container-tx'><h1 className='title-thanks-you'>Gracias por tu compra!</h1></div><br/>
        <span className='id-text'>ID: {params.orderid}</span>
        {
            isLoading?
            <div className='loader-container'>
                <Loader/>
            </div>
            :
            <>
            <div className='order-products-container'>
            <h1 className='order-title'>Productos adquiridos</h1>
            {
                items.map((product)=>{
                    return(
                        <PurchaseProduct key={product.idProduct} product={product}/>
                    )
                })
            }
            </div>
            <div className='order-info-container'>
            <h1 className='order-title'>Datos de transacción</h1>
            <div className='order-buyer'>
                <span className='buyer-name'>Nombre cliente: {buyer.name}</span>
                <span className='buyer-email'>Email: {buyer.email}</span>
                <span className='buyer-phone'>Tel: {buyer.phone}</span>
            </div>
            <h3 className='order-total'>Total de la compra<br/>${total}</h3>
            </div>
            </>
        }
        <Link to="/productos" className="shop-link">Continuar comprando
        </Link>
    </div>
  )
}

export default PurchaseCompleted