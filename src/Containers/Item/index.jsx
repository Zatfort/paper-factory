const  Item = ({ product } ) => {
    console.log(product)
    return ( 
        
        
        <div className="flex-row">
          <section className="cart_desafio">
            <article >
                <img className="cart_hollow" src={product.image} alt="mini figure" />
                <figcaption className="cart_hollow--info">
                    <span className="title"> {product.product} <br /> <small className="description"> {product.category}</small> </span>
                    <span className="price">${product.price}</span>
                </figcaption>
            </article>
          </section>
        </div>
        
     )
}
 
export default  Item