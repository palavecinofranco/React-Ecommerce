import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/firebase';
import { useCartContext } from '../../storage/cartContext';
import Loader from '../Loader/Loader';
import ItemDetail from './ItemDetail/ItemDetail';


function ItemDetailContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState([]);
    let params = useParams();

    const {addToCart} = useCartContext();

    function handleAddToCart(quantity){
        const productAndCount = {...product, quantity:quantity};
        addToCart(productAndCount);
      }

    useEffect( ()=>{
        getProduct(params.productid)
    .then((respuesta)=>{
        setProduct(respuesta)
    })
    .catch(error => alert(error))
    .finally(() => setIsLoading(false))
    }, [params])

    return(
        <>
            {isLoading?
                <Loader/>
                :
                <ItemDetail onAddToCart={handleAddToCart} discount={product.discount} id={product.idProduct} title={product.title} image={product.image} detail={product.detail} price={product.price} stock={product.stock}/>
                }
        </>
    )
}

export default ItemDetailContainer