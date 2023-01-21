import { useState } from "react";
import Button from "../Button/Button";
import "./itemcount.css"

function ItemCount ({onAddToCart, stock}){
    const [count, setCount] = useState(1);

    function handleAdd (){
        if(count < stock){
            setCount(count + 1)
        }
    }

    function handleSubstrac (){
        if(count > 1){
            setCount(count - 1)
        }
    }

    return (
        <div className="item-count-container">
            <div className="count-container">
                <button className="btn" onClick={handleAdd}>+</button>
                <small>{count}</small>
                <button className="btn" onClick={handleSubstrac}>-</button>
            </div>
            <Button onClick={()=>onAddToCart(count)} color="black" backgroundColor="orange">Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount;