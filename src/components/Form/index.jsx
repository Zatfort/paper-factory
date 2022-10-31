import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../../components/CartItem";
import { Link } from "react-router-dom";
import { database } from "../../firebase/firebase"
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import swal from 'sweetalert2'
import FormItem from "./FormItem";




const Form = () => {
    const { Cart, total, clear } = useContext(CartContext)

    const [datos, setDatos] = useState({
        Name: "",
        Surname: "",
        DNI: "",
        NameCard: "",
        NumberCard: "",
    })

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const buy = () => {
        const ventasCollection = collection(database, "sales")
        addDoc(ventasCollection, {
            comprador: datos,
            items: Cart,
            date: serverTimestamp(),
            total,
        })
            .then(result => {
                swal.fire({
                    title: "Good job!",
                    text: "Your shop is succes " + datos.Name + " Your ID is: " + result.id + " Congratulations!",
                    icon: "success",
                    button: "Aww yiss!",
                    position: 'top-end',
                });
                clear()
            })
            .catch(e => {
                console.log('ups error')
                console.error(e)
            })
    }

    return (
        <>
            <section className="container  "  >
                <section className="formContainer flex-row" >
                    <article className="input_form">
                        <div className="tittle-form" >
                            <h2>Shipping address</h2>
                        </div>
                        <section className="formSection" >
                            <article className="formArticle" >
                                <select className="form" name="country" id="country" >
                                    <option value="argentina">argentina</option>
                                    <option value="peru">peru</option>
                                    <option value="chile">chile</option>
                                    <option value="venezuela">venezuela</option>
                                </select>
                            </article>
                        </section>
                        <div className="flex-row">
                            <section className="formSection" >
                                <article className="formArticle" >
                                    <input type="text" placeholder="First name" className="form" name="Name" onChange={handleInputChange}></input>
                                </article>
                            </section>
                            <section className="formSection" >
                                <article className="formArticle" >
                                    <input type="text" placeholder="Last name" className="form" name="Surname" onChange={handleInputChange}></input>
                                </article>
                            </section>
                        </div>
                        <section className="formSection" >
                            <article className="formArticle" >
                                <input type="text" placeholder="Company(optional)" className="form" name="DNI" onChange={handleInputChange}></input>
                            </article>
                        </section>
                        <section className="formSection" >
                            <article className="formArticle" >
                                <input type="text" placeholder="Address" className="form" name="DNI" onChange={handleInputChange}></input>
                            </article>
                        </section>
                        <section className="formSection" >
                            <article className="formArticle" >
                                <input type="text" placeholder="Apartment, suite, etc.(if applicable)" className="form" name="DNI" onChange={handleInputChange}></input>
                            </article>
                        </section>
                        <div className="flex-row" >
                            <section className="formSection" >
                                <article className="formArticle" >
                                    <input type="text" placeholder="Postal code" className="form" name="DNI" onChange={handleInputChange}></input>
                                </article>
                            </section>
                            <section className="formSection" >
                                <article className="formArticle" >
                                    <input type="text" placeholder="City" className="form" name="DNI" onChange={handleInputChange}></input>
                                </article>
                            </section>
                            <section className="formSection" >
                                <article className="formArticle" >
                                    <input type="text" placeholder="Province" className="form" name="DNI" onChange={handleInputChange}></input>
                                </article>
                            </section>
                        </div>

                        <section className="formSection" >
                            <article className="formArticle" >
                                <input type="text" placeholder="phone" className="form" name="DNI" onChange={handleInputChange}></input>
                            </article>
                        </section>

                        <section>
                            <div className="container-button">
                                <button type="Submit" className="button comprar " onClick={buy}>BUY NOW</button>
                                <Link className="Link-Home" to="/">
                                    <h2> &#171;  Return to cart</h2>                               
                                </Link>
                            </div>
                        </section>

                    </article>
                    <article className="info_form" >
                        <div className="mensaje" >
                            Orders placed now may take 2 to 3 weeks before shipping out.
                        </div>
                        <div>
                            {
                                Cart.map((item) =>(
                                    <>
                                    
                                    </>
                                ))
                            }

                        </div>
                    </article>
                </section>
            </section>
        </>
    );
}

export default Form;