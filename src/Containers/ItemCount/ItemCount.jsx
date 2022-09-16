import React, { useState } from "react"



const ItemCount = ({ stock, onAdd,initial }) => {


    const [contador, setContador] = useState(initial);

    const sumar = () => {
        contador < stock && setContador(contador + 1)
    }

    const restar = () => {
        contador > initial && setContador(contador - 1)
    }

    const comprar = () => {
        setContador(initial)
        alert("GRACIAS POR SU COMPRA")
        onAdd(contador)

    }


    return (

        <>
        {/* desafio contador 06/09  */}
            <div className="articulo">
                <article className="articuloConContador" >
                    <picture>
                        <img src="https://cdn.shopify.com/s/files/1/0014/1962/products/product_HK_mini_figurines_knight_itemview_360x360.png?v=1661370610" alt="" />
                    </picture>
                    <section className="Contador">
                        <button onClick={sumar} className="css-button-3d--rose" >SUMAR</button>
                        <span>{contador}</span>
                        <button onClick={restar} className="css-button-3d--rose" >RESTAR</button>
                    </section>
                    <button onClick={comprar} className="css-button-shadow-border-sliding--sky">AGREGAR AL CARRITO</button>
                </article>
            </div>
            
        </>
    )
}

export default ItemCount;