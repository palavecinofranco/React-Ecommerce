import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { Hidden, IconButton } from "@mui/material";
import { useState } from "react";
import { Button } from '@mui/material';
import "./itemcount.css"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

function ItemCount ({onAddToCart, stock}){
    const [count, setCount] = useState(1);

    function handleAdd (){
        if(count < stock){
            setCount(count + 1)
        }
    }

    function handleSubstrac (){
        if(count > 1){
            setCount(count - 1)
        }
    }

    return (
        <div className="item-count-container">
            <Hidden smDown>
            <div className="count-container">
                <IconButton onClick={handleAdd}>
                    <AddRoundedIcon color='warning' fontSize={"large"} sx={{borderRadius:"20px", p:"8px"}}/>
                </IconButton>
                <small>{count}</small>
                <IconButton onClick={handleSubstrac}>
                    <RemoveRoundedIcon color='warning' fontSize={"large"} sx={{borderRadius:"20px", p:"8px"}}/>
                </IconButton>
            </div>
            </Hidden>
            <Hidden smDown>
                <Button variant='outlined' color='warning' onClick={()=> onAddToCart(count)} size={"large"} sx={{fontFamily:"'Inter', sans-serif;"}}>Agregar al carrito</Button>
            </Hidden>
            <Hidden smUp>
            <IconButton onClick={()=> onAddToCart(count)} color="warning" aria-label="add to shopping cart">
                <AddShoppingCartSharpIcon color='warning' sx={{fontSize:"35px"}} />
            </IconButton>
            </Hidden>
            <Hidden smUp>
            <div className="count-container">
                <IconButton onClick={handleAdd}>
                    <AddRoundedIcon color='warning' fontSize={"large"} sx={{borderRadius:"20px", p:"8px"}}/>
                </IconButton>
                <small>{count}</small>
                <IconButton onClick={handleSubstrac}>
                    <RemoveRoundedIcon color='warning' fontSize={"large"} sx={{borderRadius:"20px", p:"8px"}}/>
                </IconButton>
            </div>
            </Hidden>

        </div>
    )
}

export default ItemCount;