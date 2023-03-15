import SearchBar from "./SearchBar";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import { Grid } from '@mui/material';


function NavBar (){
    return (
        <>
      <nav className="dropdown-nav">
        <Grid container>
          <Grid item xs={6} md={3}>
            <DropdownFilter title={"Hombre"} content={[{title:"Zapatillas", id:1}, {title:"Indumentaria", id:2}, {title:"Accesorios", id:3}, {title:"Ofertas", id:4}]}/>
          </Grid>
          <Grid item xs={6} md={3}>
            <DropdownFilter title={"Mujer"} content={[{title:"Zapatillas", id:5}, {title:"Indumentaria", id:6}, {title:"Accesorios", id:7}, {title:"Ofertas", id:8}]}/>
          </Grid>
          <Grid item xs={6} md={3}>
            <DropdownFilter title={"SNKRS"} content={[{title:"Nike", id:9}, {title:"Jordan", id:10}]}/>
          </Grid>
          <Grid item xs={6} md={3}>
            <DropdownFilter title={"Ofertas"} content={[{title:"Zapatillas", id:11}, {title:"Indumentaria", id:12},{title:"Accesorios", id:13}]}/>
          </Grid>
        </Grid>
      </nav>
      <SearchBar/>
        </>
    );
}

export default NavBar