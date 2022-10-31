const CartItem = ({ item, removeItem }) => {
    return (
        <>
            <figure className="flex-row" >
                <picture className="flex-row" >
                    <img src={item.item.image} alt="" />
                    <h3>{item.item.product}</h3>
                </picture>
                <figcaption className="flex-column" >
                    <div className="caption-info" >
                        <span className="cart-quantity">{item.quantity} </span>
                        <span className="cart-x"> ×</span>
                        <span className="cart-price" >${item.item.price}</span>
                        <h5>Total:$progamar.esto</h5>
                    </div>
                    <div className="cart-button" >
                        <button onClick={() => removeItem(item)} >Move to Wish List</button>
                        <button onClick={() => removeItem(item)} >Remove</button>
                    </div>
                </figcaption>
            </figure>
        </>
    );
}

export default CartItem;