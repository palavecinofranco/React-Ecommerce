import "./button.css";
import {useState} from "react";

export default function Button (props){


    const [backgroundColorState, setbackgroundColorState] = useState("orange");
    const [colorState, setColorState] = useState();

    let styleButton = {
        padding: "8px",
        backgroundColor: backgroundColorState,
        color: colorState,
    }

    function handleClick(e){
        console.log("hice click")
        setbackgroundColorState("black");
        setColorState("orange");
    }

    return(
        <button onMouseDown={handleClick} onClick={props.onClick} style={styleButton} className="btn-comprar">{props.children}</button>
    )
}