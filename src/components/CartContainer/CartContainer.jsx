import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import { Button } from '@mui/material';
import ItemCart from "./ItemCart";
import "./cartContainer.css";
import logoNike from "../../Images/logonikepipa.png";
import { createOrder } from "../../services/firebase";
import Swal from 'sweetalert2'
import UserInput from "../UserInput/UserInput";
import { Grid } from "@mui/material";


function CartContainer() {
  const { cart, getTotalPrice, clear, getPriceWithDiscount } = useContext(cartContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  function onInputChange(evt) {
    let value = evt.target.value
    let inputName = evt.target.name
    let newState = {...userData}
    newState[inputName] = value
    setUserData(newState)
  }

  function formIsInvalid(){
    return !(userData.name !== "" && userData.phone !== "" && userData.email !== "")
  }

  function handleCheckout(evt) {
    const products = cart.map(({ idProduct, title, quantity }) => ({
      idProduct,
      price: getPriceWithDiscount(idProduct),
      title,
      quantity,
    }));
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
    createOrder(orderBuy).then((idProduct) => {
      let timerInterval;
      Swal.fire({
        title: "Finalizando tu compra...",
        html: "Redirigiendo en <b/>",
        timer: 2500,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          clear();
          navigate(`/completed-purchase/${idProduct}`);
        }
      });
    });
  }

  if (cart.length === 0) {
    return (
      <div className="container-void-msg">
        <h1 className="void-msg">No tienes productos en tu carrito!</h1>
        <Link to="/productos" className="shop-link">
          Comienza a comprar
        </Link>
        <Link to="/">
          <img src={logoNike} width={200} alt="logo" />
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <Grid container>
          <Grid item sm={12} md={7}>
        <div className="itemscart-container">
          {cart.map((item) => (
            <ItemCart item={item} key={item.idProduct} />
          ))}
        </div>
        </Grid>
        <Grid item xs={12} md={5}>
        <div className="finish-container">
          <form className="form-user">
            <UserInput value={userData.name} type={"text"} name={"name"} placeholder={"Ingresa tu nombre"} onChange={onInputChange} title={"Nombre"}/>
            <UserInput value={userData.email} type={"email"} name={"email"} placeholder={"Ingresa un email"} onChange={onInputChange} title={"Email"}/>
            <UserInput value={userData.phone} type={"tel"} name={"phone"} placeholder={"Ingresa un teléfono"} onChange={onInputChange} title={"Teléfono"}/>
          </form>
          <h4 className="total-price">Total: ${getTotalPrice()}</h4>
          <div className="btn-container">
            <Button variant="contained" color="error" onClick={() => clear()}>
              Vaciar Carrito
            </Button>
            <Button variant="contained" color="success" onClick={handleCheckout} disabled={formIsInvalid()}>Comprar</Button>
          </div>
        </div>
        </Grid>
        </Grid>
      <div className="text-link">
      <Link to="/productos" className="shop-link">Continuar comprando
        </Link>
      </div>
      </>
    );
  }
}

export default CartContainer;
