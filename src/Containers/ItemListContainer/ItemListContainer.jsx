import React from 'react'
import ItemList from '../ItemList';
import { products } from '../../assets/productos';
import { customFetch } from '../../utils/customFetch';
import { useState,useEffect } from 'react';

const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        customFetch(products)
           .then(res => setListProducts(res) )
    }, [])

    

    return (
       <>
       <ItemList listProducts={listProducts} />
       </>
    );
}
 
export default ItemListContainer;