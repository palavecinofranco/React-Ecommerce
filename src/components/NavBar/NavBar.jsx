import CartWidget from "./CartWidget/CartWidget"
import "./navBar.css"
import logo from "./logonike.svg"
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";


function NavBar (){
    return (
        <>
        <nav className="header-nav">
            <Link to={"/"}><img src={logo} alt="logo" width={125} height={125} className="logoNike"/></Link>
            <ul className='nav-ul'>
                <li className='nav-li'><Link className="nav-link" to={"/productos"}>Productos</Link></li>
                <li className='nav-li'><Link className="nav-link" to={"/"}>Tiendas</Link></li>
                <li className='nav-li'><Link className="nav-link" to={"/"}>Contacto</Link></li>
                <li className='nav-li li-carrito'><Link className="nav-link-cart" to={"/cart"}><CartWidget /></Link></li>
            </ul>
      </nav>
      <SearchBar/>
        </>
    );
}

export default NavBar