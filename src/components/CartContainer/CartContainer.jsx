import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import Button from "../Button/Button";
import ItemCart from "./ItemCart";
import "./cartContainer.css";

function CartContainer() {
  const { cart, getTotalPrice, clear } = useContext(cartContext);

  if (cart.length === 0) {
    return (
      <div className="container-void-msg">
        <h1>No tienes items en tu carrito!</h1>
        <Link to="/">Comienza a comprar</Link>
      </div>
    );
  } else {
    return (
      <div className="cart-container">
        {cart.map((item) => (
          <ItemCart item={item} />
        ))}
        <div className="finish-container">
          <p>Total: {getTotalPrice()}</p>
          <div className="btn-container">
            <Button color="red" backgroundColor="pink" onClick={() => clear()}>
              Vaciar Carrito
            </Button>
            <Button color="green" backgroundColor="greenyellow">
              Comprar
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartContainer;
