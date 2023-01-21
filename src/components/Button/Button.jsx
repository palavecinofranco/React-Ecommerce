import "./button.css";

export default function Button (props){

    let styleButton = {
        padding: "8px",
        backgroundColor: `${props.backgroundColor}`,
        color: `${props.color}`,
    }
    
    return(
        <button onClick={props.onClick} style={styleButton} className="btn-comprar">{props.children}</button>
    )
}