
const ItemDetail = ({ producto }) => {
    return (
        <div className="contenedor">
            <section className="flex-row itemdetail">
                <picture>              
                    <img src={producto.image} alt="" />
                </picture>
                <article>
                    <figcaption>
                        <div className="muestra">
                            <h2>{producto.category} <br /> <h1>{producto.title}</h1> </h2>
                            <h2>ID:{producto.id}</h2>
                        </div>
                        <div className="flex-column divison">
                            <h2>price {producto.price}</h2>
                            <button className="css-button-3d--rose" >ADD TO CART</button>
                            <h2>{producto.description}</h2>
                        </div>
                    </figcaption>
                </article>
            </section>
        </div>

    );
}

export default ItemDetail;