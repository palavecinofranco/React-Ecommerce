import SearchBar from "./SearchBar";
import DropdownFilter from "../DropdownFilter/DropdownFilter";


function NavBar (){
    return (
        <>
      <nav className="dropdown-nav">
        <DropdownFilter title={"Hombre"} content={[{title:"Zapatillas", id:1}, {title:"Indumentaria", id:2}, {title:"Accesorios", id:3}, {title:"Ofertas", id:4}]}/>
        <DropdownFilter title={"Mujer"} content={[{title:"Zapatillas", id:5}, {title:"Indumentaria", id:6}, {title:"Accesorios", id:7}, {title:"Ofertas", id:8}]}/>
        <DropdownFilter title={"SNKRS"} content={[{title:"Nike", id:9}, {title:"Jordan", id:10}]}/>
        <DropdownFilter title={"Ofertas"} content={[{title:"Zapatillas", id:11}, {title:"Indumentaria", id:12},{title:"Accesorios", id:13}]}/>
      </nav>
      <SearchBar/>
        </>
    );
}

export default NavBar