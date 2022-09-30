
const ItemDetail = ({ producto }) => {
    return (

        <>

        <section className="itemdetail container" >
                <h1>Posters</h1>
            <article className=" item flex-row ">
                <picture className="imageDetail">              
                    <img src={producto.imageDetail} alt="" />
                </picture>
                <article className="description" >

                    <article>
                        <h2> {producto.productDetail}</h2>



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