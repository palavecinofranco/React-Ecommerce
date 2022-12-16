import CartWidget from "../CartWidget/CartWidget"
import "./navBar.css"
import logo from "./logo.svg"
function NavBar (){
    return (
        <nav className="header-nav">
            <img src={logo} width={150} height={150}></img>
            <ul className='nav-ul'>
                <li className='nav-li'><a className='nav-link' href="#">Productos</a></li>
                <li className='nav-li'><a className='nav-link' href="#">Reservar</a></li>
                <li className='nav-li'><a className='nav-link' href="#">Contacto</a></li>
                <li className='nav-li li-carrito'><CartWidget /></li>
            </ul>
      </nav>
    );
}

export default NavBar