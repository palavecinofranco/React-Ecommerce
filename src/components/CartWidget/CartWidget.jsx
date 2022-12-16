import "./CartWidget.css"

function CartWidget (){
    return (
        <>
            <i className="fa-solid fa-cart-shopping carrito"></i>
            <span className="carrito-contador">6</span>
        </>
    );
}

export default CartWidget