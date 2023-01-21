import { useContext } from "react";
import { cartContext } from "../../../storage/cartContext";
import "./CartWidget.css"

function CartWidget (){
    const context = useContext(cartContext)

    return (
        <>
            <i className="fa-solid fa-cart-shopping carrito"></i>
            {
                context.getTotalItemsInCart() !==0 && <span className="carrito-contador">{context.getTotalItemsInCart()}</span>
            }
        </>
    );
}

export default CartWidget