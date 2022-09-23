import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import ItemDetail from '../ItemDetail';


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        

        const getItem = async () =>{
            try{
                const respuesta = await fetch('https://fakestoreapi.com/products/1');
                const data = await respuesta.json();
                setProducto(data);

            }
            catch(err){
                console.log("un error: " , err);
                console.error("un error: ",err);

            }
            finally{
                setLoading(false)

            }
        }

        getItem()


    }, [])



    return ( <>
    {
        loading ?
        <CircularProgress />
        :
        <ItemDetail producto={producto} />

    }
    
    
             </> );
}
 
export default ItemDetailContainer;