import React from 'react'
import '../../App.scss'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='saludos' >
        <h1>{greeting}</h1>
        </div>  
    );
}
 
export default ItemListContainer;