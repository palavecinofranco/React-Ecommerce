import { useContext } from "react";
import { cartContext } from "../../../storage/cartContext";
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import "./CartWidget.css"

function CartWidget (){
    const context = useContext(cartContext)

    return (
        <>
            <ShoppingCartSharpIcon/>
            {
                context.getTotalItemsInCart() !==0 && <span className="carrito-contador">{context.getTotalItemsInCart()}</span>
            }
        </>
    );
}

export default CartWidget