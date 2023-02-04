import "./button.css";

export default function Button (props){

    let styleButton = {
        padding: "8px",
        backgroundColor: `${props.backgroundColor}`,
        color: `${props.color}`
    }
    if(props.disabled){
        styleButton = {
            padding: "8px",
            backgroundColor: ``,
            color: ``
        }
    }
    
    return(
        <button onClick={props.onClick} disabled={props.disabled} style={styleButton} className="boton">{props.children}</button>
    )
}