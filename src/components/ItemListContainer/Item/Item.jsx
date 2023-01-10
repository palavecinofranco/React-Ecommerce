import { Link } from "react-router-dom";
import "./item.css";

export default function Item (props){

    const {image, detail, title, price, id} = props.item;

    return (
        <Link className="item-link" to={`/details/${id}`}>
            <div className="card">
                <div className="container-img">
                    <img src={image} alt={title} className="card-img"/>
                </div>
                <div className="container-details">
                    <h4 className="item-title">{title}</h4>
                    <span className="item-price">${price}</span>
                </div>
            </div>
        </Link>
    );
}