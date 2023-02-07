import SearchBar from "./SearchBar";
import DropdownFilter from "../DropdownFilter/DropdownFilter";


function NavBar (){
    return (
        <>
      <nav className="dropdown-nav">
        <DropdownFilter title={"Hombre"} content={["Zapatillas", "Indumentaria", "Accesorios", "Ofertas"]}/>
        <DropdownFilter title={"Mujer"} content={["Zapatillas", "Indumentaria", "Accesorios", "Ofertas"]}/>
        <DropdownFilter title={"SNKRS"} content={["Jordan", "Nike"]}/>
        <DropdownFilter title={"Ofertas"} content={["Zapatillas", "Indumentaria", "Accesorios"]}/>
      </nav>
      <SearchBar/>
        </>
    );
}

export default NavBar