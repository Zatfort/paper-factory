import React from 'react'
import ItemList from '../ItemList';
import { products } from "../../assets/productos"
import { customFetch } from '../../utils/customFetch';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    
    let { IdCategories } = useParams();

    const [listProducts, setListProducts] = useState([])

    const URL_BASE = "https://fakestoreapi.com/products?limit=10"
    const URL_CATEGORY = "https://fakestoreapi.com/products/category/"
    
    useEffect(() => {
        const obtenerDatos = async () =>{
            try{
                const data = await fetch (`${URL_CATEGORY}${IdCategories} `)
                const listApi = await data.json()
                setListProducts(listApi)
            }
            catch(err){
                console.log("error en obtenerDatos: ",err)
                console.error("error en obtenerDatos: ",err);
            }
        }

        obtenerDatos()
        
    },[IdCategories])


    return (
        <>
            <div className=' flex-row contenedorMain '>
            <ItemList listProducts={listProducts} />
            </div>
        </>
    );
}

export default ItemListContainer;