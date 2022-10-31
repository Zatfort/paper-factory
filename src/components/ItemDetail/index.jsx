
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";


const ItemDetail = ({ producto }) => {

    const [irAlCarrito, setIrAlCarrito] = useState(false);

    const { addItem, Cart } = useContext(CartContext)


    const onAdd = (contador) => {
        addItem(producto, contador)
        setIrAlCarrito(true)
    };
    console.log(Cart)

    return (
        <>
            <section className="itemdetail container" >
                <h1>{producto.category}</h1>
                <article className=" item flex-row ">
                    <picture className="imageDetail">
                        <img src={producto.imageDetail} alt="" />
                    </picture>
                    <article className="description" >
                        <article className="description_product" >
                            <h2> {producto.productDetail}</h2>
                            <h6>by {producto.autor}</h6>
                        </article>
                        <h3> ${producto.price}</h3>
                        <article className="pricing_and_amount  " >
                            <p>{producto.description}</p>
                            <p>{producto.descriptionSecond}</p>
                            {
                                irAlCarrito
                                    ? 
                                        <section className="button-buy" >
                                            <h3>✓ Added to cart!</h3>
                                            <Link to='/cart'>
                                            <button className="en " >View cart ›</button>
                                            </Link>
                                        </section>
                                        
                                    : <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
                            }
                        </article>
                    </article>
                </article>
            </section>
        </>
    );
}

export default ItemDetail;