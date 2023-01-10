import getProducts, { getProductByCategory } from "../../services/mockServices";
import Item from "./Item/Item";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


function ItemListContainer (props){

    const [products, setProducts] = useState([]);
    let {categoryid} = useParams()

    useEffect( ()=>{
        if (!categoryid){
            getProducts()
            .then((respuesta)=>{
            setProducts(respuesta)
            })
        }
        else {
            getProductByCategory(categoryid)
            .then((respuesta)=>{
                setProducts(respuesta)
            })
        }
    }, [categoryid])

    return(
        <ItemList>
            {
                products.map((item) => <Item key={item.id} item={item}/>)
            }
        </ItemList>
    )
}

export default ItemListContainer