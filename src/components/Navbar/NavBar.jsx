
import React from "react";
import logo from "../../assets/logo.svg"
import CartWidget from "../Cart/CartWidget";


const NavBar = () =>{
    return (
        <>
        <header>
        <nav className="flex-row container">
            <a className="logoContainer" href="./index.html">
                <picture >
                    <img className="logo" src={logo}  alt="Logo"/>
                </picture>
            </a>
            <ul className=" menu flex-row">
                <li className="menu__item">
                    <a className="menu__link" href="./index.html">Catalog  <box-icon name='chevron-down' type='solid' color='#ffffff' ></box-icon> </a>
                    
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="./index.html">Collections <box-icon name='chevron-down' type='solid' color='#ffffff' ></box-icon> </a>
                </li>

            </ul>
            <ul className=" menuSecond flex-row">
                <li className="menuSecond__item">
                    <a className="menuSecond__link" href="./index.html">Help </a>
                </li>
                <i className="fa-solid fa-circle"></i>
                <li className="menuSecond__item">
                    <a className="menuSecond__link " href="./index.html">login</a>
                </li>
            </ul>
            <section className="mainBuscador">
                <i className="fa-solid fa-magnifying-glass lupa"></i>
            </section>

            
            
            <section className="sectionCarrito">
                    < CartWidget/>
                {/* <div className="carritoMain flex-row">
                    <span className="cantidadCarrito" >
                        500
                    </span>
                   
                </div> */}
            </section>
        </nav>

        </header>
        </>
    )
}

export default NavBar
