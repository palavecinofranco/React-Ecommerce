import { createContext, useContext, useState } from "react";
import { useDeepCopy } from "../components/hooks/useDeepCopy";

export const cartContext = createContext()

function CartProvider (props) {
    
    const [cart, setCart] = useState([]);
    let newCart = useDeepCopy(cart);


    function addToCart ( product ) {
        let productIndex = cart.findIndex(item => product.id === item.id)
        if(productIndex === -1){
            newCart.push(product)
            setCart(newCart)
        }
    }

    function getTotalItemsInCart () {
        let total = 0;
        cart.forEach((product) =>{
            total += product.quantity;
        })
        return total;
    }

    function removeItem(itemId){
        let productIndex = cart.findIndex(product => product.id === itemId)
        newCart.splice(productIndex, 1)
        setCart(newCart);
    }

    function clear () {
        setCart([]);
    }

    function getTotalPrice(){
        let total = 0;
        cart.forEach((product) =>{
            total += (product.price * product.quantity);
        })
        return total;
    }

    function isInCart(itemId) {
        let itemIndex= cart.findIndex((item) => item.id === itemId)
        if(itemIndex !== -1)
            return true;
        else
            return false;
    }

    function addQuantity(productId){
        
    }

    return(
        <cartContext.Provider value={{cart, addToCart, getTotalItemsInCart, removeItem, clear, getTotalPrice, isInCart}}>
            {props.children}
        </cartContext.Provider>
    )
}

export function useCartContext(){
    return useContext(cartContext);
}

export { CartProvider };