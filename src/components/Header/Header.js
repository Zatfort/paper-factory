import React from "react";
import '../../App.scss'
import logo from "../../assets/logo.svg"


const Header = () =>{
    return (
        <>
        <header>
        <nav class="flex-row container">
            <a class="logoContainer" href="./index.html">
                <picture >
                    <img class="logo" src={logo}  alt="Logo"/>
                </picture>
            </a>
            <ul class=" menu flex-row">
                <li class="menu__item">
                    <a class="menu__link" href="./index.html">Catalog  <box-icon name='chevron-down' type='solid' color='#ffffff' ></box-icon> </a>
                    
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="./index.html">Collections <box-icon name='chevron-down' type='solid' color='#ffffff' ></box-icon> </a>
                </li>

            </ul>
            <ul class=" menuSecond flex-row">
                <li class="menuSecond__item">
                    <a class="menuSecond__link" href="./index.html">Help </a>
                </li>
                <i class="fa-solid fa-circle"></i>
                <li class="menuSecond__item">
                    <a class="menuSecond__link " href="./index.html">login</a>
                </li>
            </ul>
            <section class="mainBuscador">
                <i class="fa-solid fa-magnifying-glass lupa"></i>
            </section>

            
            
            <section class="sectionCarrito">
                <div class="carritoMain flex-row">
                    <span class="cantidadCarrito" >
                        500
                    </span>
                </div>
            </section>
        </nav>

        </header>
        </>
    )
}

export default Header
