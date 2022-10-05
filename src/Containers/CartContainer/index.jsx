import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../../components/CartItem";

const CartContainer = () => {
    const { Cart, removeItem } = useContext(CartContext)
    

    return (
        <>
        <div>cart</div>
        { Cart
        ? Cart.map(( item ) => (

            <CartItem item={item} removeItem={removeItem} key={item.item.id}   />
            

        ))
        : "vacio"}
        </>
    );
}
 
export default CartContainer;