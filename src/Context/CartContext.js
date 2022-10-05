import { createContext, useState } from "react";

export const CartContext = createContext()


const CartProvider = ({children}) => {
    const [Cart, setCart] = useState([]);

    const addItem = (item ,quantity) =>{
        const existItem = Cart.findIndex(itemCart => itemCart.item.id == item.id )

        if(existItem !== -1){
            const newCart = Cart.filter(item => item !== Cart [existItem])
            setCart([{ item, quantity }, ...newCart])
        }else{
            setCart([...Cart, { item, quantity }])
        }
    }
    const removeItem = (item) =>{
        const newCart = Cart.filter(oldItem => {
            console.log(oldItem);
            return  oldItem !== item
        })
        setCart([...newCart])
    }
    const clear = () =>{
        setCart([])
    }
    
    return ( 
        <CartContext.Provider value={{ Cart ,addItem, removeItem, clear }} >
            {children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;