import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../../components/CartItem";
import { Link } from "react-router-dom";

const CartContainer = () => {
    const { Cart, removeItem, total, clear } = useContext(CartContext)

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
                                        <div className="image" >
                                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/634ae905-3da7-4d3a-91fb-825189374f13/dcg26ug-754e5051-81f1-4bac-a989-2ba2e8a8e66f.png/v1/fit/w_375,h_268,strp/hot_spring_by_aamakuruu_dcg26ug-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQzIiwicGF0aCI6IlwvZlwvNjM0YWU5MDUtM2RhNy00ZDNhLTkxZmItODI1MTg5Mzc0ZjEzXC9kY2cyNnVnLTc1NGU1MDUxLTgxZjEtNGJhYy1hOTg5LTJiYTJlOGE4ZTY2Zi5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.y6Wmt5QvwIsj0XHprTWz9Azpgv_HUQSkn-ikcmn_fkI" alt="" />
                                        </div>
                                       
                                        <Link className="c" to="/Form" >
                                            <button  className="comprar" >PROCEED TO CHECKOUT » </button>
                                        </Link>
                                        <button onClick={clear} className="clear">CLEAR CART</button>

                                        
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