import React from 'react'
import ItemList from "../../components/ItemList"
import { products } from "../../assets/productos"
import { customFetch } from '../../utils/customFetch';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';
import { database } from "../../firebase/firebase"
import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    let { IdCategoria } = useParams()
    
    const [listProducts, setListProducts] = useState([])
    const [ loading, setLoading ] = useState(true)
   


    useEffect(() => {

        
        const productsCollection = collection(database, 'products')
        const productCategory = query(productsCollection, where('category','==',`${IdCategoria}`))
        let url = (IdCategoria === undefined ? productsCollection : productCategory )
        getDocs( url )
        .then((data) =>{
            const lista = data.docs.map((product)=>{
                return{
                    ...product.data(),
                    id: product.id
                }
            })
            setListProducts(lista)
        })
        // const db = IdCategoria
        // ? products.filter(product => product.category == IdCategoria)
        // :products;
        // customFetch(db)
        //    .then(res =>{
        //         setLoading(false)
        //         setListProducts(res)
        // } )    
            
    },[IdCategoria])






    return (
        <>
            <div className=' flex-row contenedorMain container  '>
                {
                    // condicion con spinner
                    // loading ?
                    // <div className='circular'>
                    //     <CircularProgress/>
                    // </div>
                    // :
                    <ItemList listProducts={listProducts} />
                }
            </div>
        </>
    );
}

export default ItemListContainer;