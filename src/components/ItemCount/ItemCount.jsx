import {useState} from "react";
import Button from "../Button/Button";

function ItemCount (props){
    const [count, setCount] = useState(1);
    const stock = 15;

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
        <div className="flex-container">
            <div className="count-container flex-container">
                <button className="btn" onClick={handleAdd}>+</button>
                <small>{count}</small>
                <button className="btn" onClick={handleSubstrac}>-</button>
            </div>
            <div className="btn-agregar">
                <Button onClick={props.onAddToCart}>Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount;