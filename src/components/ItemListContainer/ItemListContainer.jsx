import { getProductByCategory } from "../../services/firebase";
import { getProducts } from "../../services/firebase";
import Item from "./Item/Item";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";


function ItemListContainer (){

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let {categoryid} = useParams();

    useEffect( ()=>{
        if (!categoryid){
            getProducts()
            .then((respuesta)=>{
            setProducts(respuesta)
            })
            .catch((error) => alert(error))
            .finally(() => setIsLoading(false))
        }
        else if(categoryid){
            setIsLoading(true)
            getProductByCategory(categoryid)
            .then((respuesta)=>{
            setProducts(respuesta)
            setIsLoading(false)
            })
            .finally(() => setIsLoading(false))
        }
    }, [categoryid])

    return(
        <>
        {isLoading? 
            <Loader/>
            :
            <>
                <ItemList>
                {
                    products.map((item) => <Item key={item.id} item={item}/>)
                }
                </ItemList>
            </>
            }
        </>
    )
}

export default ItemListContainer