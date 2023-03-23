import DropdownFilter from "../DropdownFilter/DropdownFilter";
import { Grid } from '@mui/material';


function NavBar (){
    return (
        <>
      <nav className="dropdown-nav">
        <Grid container>
          <Grid item xs={6} md={3}>
            <DropdownFilter title={"Hombre"} content={[{title:"Calzados", id:1, category:"calzados"}, {title:"Indumentaria", id:2, category:"indumentaria"}, {title:"Accesorios", id:3, category:"accesorios"}, {title:"Ofertas", id:4, category:"ofertas"}]}/>
          </Grid>
          <Grid item xs={6} md={3}>
            <DropdownFilter title={"Mujer"} content={[{title:"Calzados", id:5, category:"calzados"}, {title:"Indumentaria", id:6, category:"indumentaria"}, {title:"Accesorios", id:7, category:"accesorios"}, {title:"Ofertas", id:8, category:"ofertas"}]}/>
          </Grid>
          <Grid item xs={6} md={3}>
            <DropdownFilter title={"SNKRS"} content={[{title:"Nike", id:9, category:"nike"}, {title:"Jordan", id:10, category:"jordan"}]}/>
          </Grid>
          <Grid item xs={6} md={3}>
            <DropdownFilter title={"Ofertas"} content={[{title:"Calzados", id:11, category:"calzados"}, {title:"Indumentaria", id:12, category:"indumentaria"},{title:"Accesorios", id:13, category:"accesorios"}]}/>
          </Grid>
        </Grid>
      </nav>
        </>
    );
}

export default NavBar