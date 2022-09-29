const Item = ({ product }) => {
    console.log(product)
    return (
        <>
            <section className="cart_desafio">
                <article>
                    <img className="cart_hollow" src={product.image} alt="mini figure" />
                    <figcaption className="cart_hollow--info">
                        <span className="title"> {product.title} <br /> <small className="description"> {product.category}</small> </span>
                        <span className="price">
                            <br />${product.price}</span>
                    </figcaption>
                </article>
            </section>
        </>
    )
}

export default Item