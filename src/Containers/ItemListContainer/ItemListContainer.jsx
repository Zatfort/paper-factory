import React from 'react'
import ItemList from '../ItemList';
import { products } from '../../assets/productos';
import { customFetch } from '../../utils/customFetch';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        customFetch(products)
            .then(res =>{
                setLoading(false)
                setListProducts(res)
                
            } )
    }, [])



    return (
        <>
            <div className=' flex-row contenedorMain '>
                {
                    loading ?
                    <CircularProgress />
                    :
                    <ItemList listProducts={listProducts} />

                }

            </div>
        </>
    );
}

export default ItemListContainer;