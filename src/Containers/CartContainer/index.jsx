import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../../components/CartItem";
import { Link } from "react-router-dom";
import { database } from "../../firebase/firebase"
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";

const CartContainer = () => {
    const { Cart, removeItem, total, clear } = useContext(CartContext)



    const datosComprador ={
        nombre:"dani",
        apellido:"guti",
        email:"dani@hotmail.com"
    }

    const finalizarCompra = () =>{
        const ventasCollection = collection(database,"sales")
        addDoc(ventasCollection,{
            comprador:datosComprador,
            items: Cart,
            date: serverTimestamp(),
            total,
        })
        .then(result =>{
            console.log(result.id)
            clear()
            
        })              
    }
   


    return (
        <>
            {Cart.length === 0 ? (
                <section className="cart-empty container " >
                    <h1>SHOPPING CART</h1>
                    <article className="message_link flex-column " >
                        <h2>Your cart is empty!</h2>
                        <Link to="/" >
                            <h3>Continue shopping ›</h3>
                        </Link>
                    </article>
                </section>
            ) : (
                <>
                    <>
                        <section className="cart-full container " >
                            <h1>SHOPPING CART</h1>
                            <section className="cart flex-row " >
                                <article className="cart_left" >
                                    {
                                        Cart.map((item) => (
                                            <CartItem item={item} removeItem={removeItem} key={item.item.id} />
                                        ))
                                    }
                                </article>
                                <article className="cart_right">
                                    <div className="checkout-top">
                                        <div className="subtotal  ">
                                            Subtotal:
                                            <span className="total">${total.toFixed(2)}</span>
                                        </div>
                                        <button onClick={finalizarCompra} className="comprar"  >finalizarCompra</button>
                                        <button onClick={clear}>Vaciar Carrito</button>
                                    </div>
                                </article>
                            </section>
                        </section>
                    </>
                </>
            )}
        </>
    )
}

export default CartContainer


{/* <div>cart</div>
{ Cart
? Cart.map(( item ) => (
    <CartItem item={item} removeItem={removeItem} key={item.item.id}   />
))
: "vacio"} */}