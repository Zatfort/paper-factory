import React from 'react'
import ItemList from "../../components/ItemList"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { database } from "../../firebase/firebase"
import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    let { IdCategoria } = useParams()
    
    const [listProducts, setListProducts] = useState([])
   
   


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
       
            
    },[IdCategoria])






    return (
        <>
            <div className=' flex-row contenedorMain container  '>
                {
                  
                    <ItemList listProducts={listProducts} />
                }
            </div>
        </>
    );
}

export default ItemListContainer;