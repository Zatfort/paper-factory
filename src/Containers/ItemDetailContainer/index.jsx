import { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail';
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
    }, [id])
    return (<>
        <ItemDetail producto={producto} />
    </>);
}

export default ItemDetailContainer;