import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import { Button, Input } from '@mui/material';
import ItemCart from "./ItemCart";
import "./cartContainer.css";
import logoNike from "../../Images/logonikepipa.png";
import Swal from 'sweetalert2'
import UserInput from "../UserInput/UserInput";
import { Grid } from "@mui/material";
import { userDataContext } from "../../storage/userDataContext";


function CartContainer() {

  const { cart, getTotalPrice, clear } = useContext(cartContext);
  const navigate = useNavigate();
  const {saveData, userData} = useContext(userDataContext)
  console.log(cart)

  function onInputChange(evt) {
    let value = evt.target.value
    let inputName = evt.target.name
    let newState = {...userData}
    newState[inputName] = value
    saveData(newState)
  }

  function handleSubmit(event) {
    event.preventDefault()

      let timerInterval;
      Swal.fire({
        title: "Validando datos...",
        html: "Redirigiendo en <b/>",
        timer: 2000,
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
          navigate(`/purchase`);
        }
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
        <Grid container sx={{mt:"50px"}}>
          <Grid item sm={12} md={7}>
        <div className="itemscart-container">
          {cart.map((item) => (
            <ItemCart item={item} key={item.idProduct} />
          ))}
        </div>
        </Grid>
        <Grid item xs={12} md={5}>
        <div className="finish-container">
          <form className="form-user" onSubmit={handleSubmit} >
            <UserInput value={userData.name} type={"text"} name={"name"} placeholder={"Ingresa tu nombre"} onChange={onInputChange} title={"Nombre"}/>
            <UserInput value={userData.email} type={"email"} name={"email"} placeholder={"Ingresa un email"} onChange={onInputChange} title={"Email"}/>
            <UserInput value={userData.phone} type={"tel"} name={"phone"} placeholder={"Ingresa un teléfono"} onChange={onInputChange} title={"Teléfono"}/>
            <div className="btn-container">
              <Input 
              sx={{fontSize:"0.875rem", 
                  fontFamily:"Roboto,Helvetica,Arial,sans-serif",
                  padding:"6px 16px", borderRadius:"4px",
                  color:"#FFF",
                  backgroundColor:"green",
                  boxShadow:"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                  letterSpacing:"0.02857em",
                  display:"flex",
                  alignItems:"center",
                  lineHeight:"0",
                  cursor:"pointer"}} 
              disableUnderline={true} 
              type="submit" 
              value="COMPRAR"/>
              <Button variant="contained" color="error" onClick={() => clear()}>
                Vaciar Carrito
              </Button>
            </div>
          </form>
          <h4 className="total-price">Total: ${getTotalPrice()}</h4>
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
