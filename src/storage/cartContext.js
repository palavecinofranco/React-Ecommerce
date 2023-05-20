import { createContext, useContext, useState } from "react";
import { useDeepCopy } from "../components/hooks/useDeepCopy";

export const cartContext = createContext()

function CartProvider (props) {
    
    const [cart, setCart] = useState([]);
    let newCart = useDeepCopy(cart);

    function addToCart ( product ) {
        let productIndex = newCart.findIndex(item => product.idProduct === item.idProduct)
        if(productIndex === -1){
            newCart.push(product)
            setCart(newCart)
        }
    }

    function getTotalItemsInCart () {
        let total = 0;
        newCart.forEach((product) =>{
            total += product.quantity;
        })
        return total;
    }

    function removeItem(itemId){
        let productIndex = newCart.findIndex(product => product.idProduct === itemId)
        newCart.splice(productIndex, 1)
        setCart(newCart);
    }

    function clear () {
        setCart([]);
    }

    function getTotalPrice(){
        let total = 0;
        cart.forEach((product) =>{
            let productPriceWithDiscount = product.price -(product.price*product.discount/100);
            total += (productPriceWithDiscount * product.quantity);
        })
        return total;
    }

    function isInCart(itemTitle) {
        let itemIndex = cart.findIndex(item => item.title === itemTitle)
        if(itemIndex !== -1)
            return true;
        else
            return false;
    }

    function addQuantity(productId){
        let product = newCart.find(item=>item.idProduct === productId)
        if(product.quantity<product.stock){
            product.quantity++
        }
        setCart(newCart)
    }

    function subtractQuantity(productId){
        let product = newCart.find(item=>item.idProduct === productId)
        if(product.quantity>1){
            product.quantity--
        }
        setCart(newCart)
    }

    function getPriceWithDiscount(idProduct){
        let product = cart.find(item=>item.idProduct === idProduct)
        return product.price -(product.price*product.discount/100);
    }

    function getSubTotalPrice (idProduct) {
        let product = cart.find(item=>item.idProduct === idProduct)
        return getPriceWithDiscount(idProduct) * product.quantity;
    }

    return(
        <cartContext.Provider value={{cart, addToCart, getTotalItemsInCart, removeItem, clear, getTotalPrice, isInCart, addQuantity, subtractQuantity, getPriceWithDiscount, getSubTotalPrice}}>
            {props.children}
        </cartContext.Provider>
    )
}

export function useCartContext(){
    return useContext(cartContext);
}

export { CartProvider };