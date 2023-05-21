import React from 'react'
import { initMercadoPago } from '@mercadopago/sdk-react';
import { CardPayment } from '@mercadopago/sdk-react';
import "./mpPurchase.css"
import { createOrder } from "../../services/firebase";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../../storage/cartContext';
import { userDataContext } from '../../storage/userDataContext';

function MpPurchase() {
    initMercadoPago('TEST-d53bb9dd-e7cb-4f0d-b75d-313c7f861c79', {locale: 'es-AR'});
    const navigate = useNavigate();
    const { cart, getTotalPrice, getPriceWithDiscount, clear } = useContext(cartContext);
    const { userData } = useContext(userDataContext)
    const products = cart.map(({ idProduct, title, quantity }) => ({
        idProduct,
        price: getPriceWithDiscount(idProduct),
        title,
        quantity,
      }));

const initialization = {
  amount: getTotalPrice(),
 };

 

 const customization = {
    visual: {
        texts: {
            cardNumber:{
                placeholder:"5031 7557 3453 0604",
                label:"Número de tarjeta (5031 7557 3453 0604)"
            },
        },
      style: {
        theme: "default"
      }
    }
 };

 const onError = async (error) => {
  console.log(error);
 };

 const orderBuy = {
    buyer: {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
    },
    items: products,
    total: getTotalPrice(),
    date: new Date(),
  };

 const onSubmit = async () => {
    createOrder(orderBuy).then((idProduct) => {
        navigate(`/completed-purchase/${idProduct}`)
        clear()
    })
 }
  return (
    <div className='card-payment-container'>
        <CardPayment
        initialization={initialization}
        customization={customization}
        onError={onError}
        onSubmit={onSubmit}
    />
    </div>
  )
}

export default MpPurchase