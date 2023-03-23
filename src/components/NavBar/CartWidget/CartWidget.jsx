import { useContext } from "react";
import { cartContext } from "../../../storage/cartContext";
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import "./CartWidget.css"
import { Badge, IconButton } from "@mui/material";

function CartWidget (){
    const context = useContext(cartContext)

    return (
        <>
            <IconButton aria-label="cart">
                <Badge badgeContent={context.getTotalItemsInCart()} color="warning">
                    <ShoppingCartSharpIcon color="warning" />
                </Badge>
            </IconButton>
        </>
    );
}

export default CartWidget