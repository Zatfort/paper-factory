
import ItemCount from "../ItemCount/ItemCount";
import  { Link } from 'react-router-dom'
import { useState } from "react";


const ItemDetail = ({ producto }) => {

    const [irAlCarrito, setIrAlCarrito] = useState (false); 


    const onAdd = () => {setIrAlCarrito(true)};





    return (

        <>

        <section className="itemdetail container" >
                <h1>Posters</h1>
            <article className=" item flex-row ">
                <picture className="imageDetail">              
                    <img src={producto.imageDetail} alt="" />
                </picture>
                <article className="description" >

                    <article className="description_product" >
                        <h2> {producto.productDetail}</h2>
                        <h6>by Juliane Prenhacca</h6>
                    </article>
                    <h3> ${producto.price}</h3>
                    <article className="pricing_and_amount  " >
                        <p>Brave the depths of a forgotten kingdom</p>

                        {
                            irAlCarrito
                            ?<Link to='/cart'><button>Finalizar Compra</button></Link>
                            :<ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />


                        }


                    
                    </article>

                    {/* <figcaption>
                        <div>
                            <h2>{producto.category} <br /> <h1>{producto.title}</h1> </h2>
                            <h2>ID:{producto.id}</h2>
                        </div>
                        <div >
                            <h2>price {producto.price}</h2>
                            <button className="css-button-3d--rose" >ADD TO CART</button>
                            <h2>{producto.description}</h2>
                        </div>
                    </figcaption> */}
                </article>
            </article>

        </section>
        
        
        </>
    );
}

export default ItemDetail;