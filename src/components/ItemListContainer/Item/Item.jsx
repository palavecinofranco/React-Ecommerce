import { Link } from "react-router-dom";
import "./item.css";
import Logo from "../../../Images/logonikepipa.png"

export default function Item (props){

    const {image, title, price, id, discount,stock} = props.item;
    let priceWithDiscount = price-(price*discount/100);

    return (
        <Link className="item-link" to={`/details/${id}`}>
            <div className="card">
                <img src={Logo} alt="logonike" width={45} className="logo"/>
                <div className="container-img-item">
                    <img src={image} alt={title} className="card-img"/>
                </div>
                <div className="container-details-item">
                    <div className="titles-container">
                        <span className="item-title">{title.toUpperCase()}</span>
                        {
                            stock<=5&&<><small className="stock">Ultimos disponibles!</small></>
                        }
                        {
                            discount!==0&&<><span className="discount">Descuento %{discount}</span><br/></>
                        }
                    </div>
                    <div className="price-container">
                        {
                            !discount?<span className="item-price">${price}</span>
                            :
                            <>
                                <span className="modified-price">${price}</span>
                                <span className="price-with-discount">${priceWithDiscount}</span>
                            </>
                        }
                        {
                            price>=7000&&<small className="enviogratis-msg">Envío Gratis</small>
                        }
                    </div>
                </div>
            </div>
        </Link>
    );
}