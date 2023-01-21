import { Link } from "react-router-dom";
import "./item.css";
import Logo from "../../../Images/logonikepipa.png"

export default function Item (props){

    const {image, title, price, id} = props.item;

    return (
        <Link className="item-link" to={`/details/${id}`}>
            <div className="card">
                <img src={Logo} alt="logonike" width={45} className="logo"/>
                <div className="container-img-item">
                    <img src={image} alt={title} className="card-img"/>
                </div>
                <div className="container-details-item">
                    <h4 className="item-title">{title.toUpperCase()}</h4>
                    <span className="item-price">${price}</span>
                </div>
            </div>
        </Link>
    );
}