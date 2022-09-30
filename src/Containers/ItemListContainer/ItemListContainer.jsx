import React from 'react'
import ItemList from '../ItemList';
import { products } from "../../assets/productos"
import { customFetch } from '../../utils/customFetch';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    let { IdCategoria } = useParams()
    
    const [listProducts, setListProducts] = useState([])
    const [ loading, setLoading ] = useState(true)
   


    useEffect(() => {
        const db = IdCategoria
        ? products.filter(product => product.category == IdCategoria)
        :products;
        customFetch(db)
           .then(res =>{
                setLoading(false)
                setListProducts(res)
        } )    
            
    },[IdCategoria])






    return (
        <>
            <div className=' flex-row contenedorMain '>
                {
                    // condicion con spinner
                    loading ?
                    <div className='circular'>
                        <CircularProgress/>
                    </div>
                    :
                    <ItemList listProducts={listProducts} />
                }
            </div>
        </>
    );
}

export default ItemListContainer;