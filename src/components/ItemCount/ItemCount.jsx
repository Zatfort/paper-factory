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
        onAdd(contador)

    }

    const agregarCarrito = (contador) =>{
        onAdd(contador)
        setContador(1)

    }


    return (

        <>
        {/* desafio contador 06/09  */}
            <div className="articulo">
                <article className="articuloConContador" >
                    <section className="Contador">
                        <button onClick={sumar} className="ic" >+</button>
                        <span>{contador}</span>
                        <button onClick={restar} className="ic" >-</button>
                    </section>
                    <section className="comprador" >
                        <button onClick={comprar} className="en">ADD TO CART</button>
                    </section>
                </article>
            </div>
            
        </>
    )
}

export default ItemCount;