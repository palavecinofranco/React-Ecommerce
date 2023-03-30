import React, { useState, useEffect } from 'react'
import ItemList from '../ItemListContainer/ItemList';
import Item from '../ItemListContainer/Item/Item';
import { useParams } from 'react-router-dom';
import { getProductByGenderAndOffert, getProductByGenderAndCategory, getShoesByLine, getProductByCategoryAndOffert} from '../../services/firebase';
import Loader from '../Loader/Loader';

function FilteredItemList() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {generocategory} = useParams();
    const {genero} = useParams();
    
    useEffect(()=>{
      if(genero == "mujer" || genero == "hombre"){
        if(generocategory==="ofertas"){
          setIsLoading(true)
          getProductByGenderAndOffert(genero)
          .then((respuesta)=>{
            setProducts(respuesta)
          })
          .catch((error) => alert(error))
          .finally(() => setIsLoading(false))
        } else if(generocategory==="calzados" || generocategory==="accesorios" || generocategory==="indumentaria"){
          setIsLoading(true)
          getProductByGenderAndCategory(genero, generocategory)
          .then((respuesta)=>{
            setProducts(respuesta)
          })
          .catch((error) => alert(error))
          .finally(() => setIsLoading(false))
        }
      } else if (genero == "snkrs"){
          setIsLoading(true)
          getShoesByLine(generocategory)
          .then((respuesta)=>{
            setProducts(respuesta)
          })
          .catch((error) => alert(error))
          .finally(() => setIsLoading(false))
      } else if(genero == "ofertas"){
          setIsLoading(true)
          getProductByCategoryAndOffert(generocategory)
          .then((respuesta)=>{
            setProducts(respuesta)
          })
          .catch((error) => alert(error))
          .finally(() => setIsLoading(false))
      }
  },[generocategory, genero])
  return (
    <>
        {isLoading? 
            <Loader/>
            :
                products.length>0 ?
                <ItemList>
                {
                    products.map(item=><Item key={item.id} item={item} />)
                }
                </ItemList>
                :
                <h1 className='void-msg' style={{opacity:".7"}}>No se encontraron productos</h1>
              }
        </>
  )
}

export default FilteredItemList