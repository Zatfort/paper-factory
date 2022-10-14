import { createContext, useState } from "react";

export const CartContext = createContext()


const CartProvider = ({children}) => {
    const [Cart, setCart] = useState([]);
    const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);

    const addItem = (item ,quantity) =>{
        const existItem = Cart.findIndex(itemCart => itemCart.item.id == item.id )

        if(existItem !== -1){
            const newCart = Cart.filter(item => item !== Cart [existItem])
            setCart([{ item, quantity }, ...newCart])
        }else{
            setCart([...Cart, { item, quantity }])
        }
        setQty(qty + quantity)
        setTotal(total + ( quantity * item.price ))

    }


    const removeItem = (item) =>{
        const newCart = Cart.filter(oldItem => {
            console.log(oldItem);
            return  oldItem !== item
        })
        setCart([...newCart])
        setQty(qty - newCart.quantity)
        setTotal(total - ( newCart.quantity * newCart.item.price  ))
    }
    const clear = () =>{
        setCart([])
        setQty(0)
        setTotal(0)
    }
    
    return ( 
        <CartContext.Provider value={{ Cart ,addItem, removeItem, clear, qty, total }} >
            {children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;