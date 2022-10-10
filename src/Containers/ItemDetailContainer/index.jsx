import { useState, useEffect } from 'react';
import { customFetch } from '../../utils/customFetch';
import CircularProgress from '@mui/material/CircularProgress';
import ItemDetail from '../../components/ItemDetail';
import { products } from '../../assets/productos';
import { useParams } from 'react-router-dom';
import { database } from "../../firebase/firebase"
import { getDoc, collection, doc } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    const { id } = useParams();

    useEffect(() => {
        const productCollection = collection(database, "products");
        const refDoc = doc(productCollection, id)
        getDoc(refDoc)
        .then((result)=>{
            setProducto(
            {
                id:result.id, 
                ...result.data()
            }
            )
        })
        // customFetch(products, 0, parseInt(id)).then((res) => setProducto(res))
    }, [id])

    console.log(producto)

    return (<>
        <ItemDetail producto={producto} />
    </>);
}

export default ItemDetailContainer;






/*
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
*/