const CartItem = ({ item, removeItem }) => {
    return ( 
     <>
     <h1> {item.item.product} </h1>
     <button onClick={() => removeItem(item) } > quitar</button>

     </> 
    );
}
 
export default CartItem;