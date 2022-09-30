
import React from "react";
import logo from "../../assets/logo.svg"
import logomusic from "../../assets/logomusica.svg"
import CartWidget from "../Cart/CartWidget";
import { Link, NavLink } from 'react-router-dom'
import { products } from "../../assets/productos";


const NavBar = () => {
    return (
        <>
            <header>
                <nav className="flex-row container">
                    <Link to="/">
                        <picture className="logoContainer" >
                            <img className="logo" src={logo} alt="Logo" />
                        </picture>
                    </Link>


                    <ul className=" menu flex-row">
                        <li className="menu__item">
                            <Link className="menu__link" to="">Categories<box-icon name='chevron-down' type='solid' color='#ffffff' ></box-icon> </Link>
                            <ul className="sub-menu">
                                <li className="sub-menu__item ">
                                    {/* <Link to="" className="sub-menu__link">remeras</Link> */}
                                    <ul className="flex-column listCategories ">
                                        <section className="flex-row">
                                            <Link to="/categoria/figurines">
                                                <li className="ppp">
                                                    <h2>APPAREL</h2>
                                                    <i className="fa-solid fa-shirt"></i>
                                                </li>
                                            </Link>
                                            <Link to="/categoria/posters">
                                                <li className="ppp" >
                                                    <h2>MUSIC & VIDEO</h2>
                                                    <i className="fa-solid fa-music"></i>
                                                </li>
                                            </Link>
                                            <Link to="/categoria/Books">
                                                <li className="ppp" >
                                                    <h2>GAMES</h2>
                                                    <i className="fa-solid fa-gamepad"></i>
                                                </li>
                                            </Link>
                                        </section>
                                        <section className="flex-row">
                                            <Link to="/categories/books">
                                                <li className="ppp" >
                                                    <h2>BOOKS</h2>
                                                    <i className="fa-solid fa-book"></i>
                                                </li>
                                            </Link>
                                            <Link to="/categories/art&posters">
                                                <li className="ppp" >
                                                    <h2>ART & POSTERS</h2>
                                                    <i className="fa-solid fa-palette"></i>
                                                </li>
                                            </Link>
                                            <Link to="/categories/home&office">
                                                <li className="ppp" >
                                                    <h2>HOME & OFFICE</h2>
                                                    <i className="fa-solid fa-house-chimney"></i>
                                                </li>
                                            </Link>
                                        </section>
                                    </ul>
                                </li>
                                {/* <li className="sub-menu__item">
                                    <Link to="" className="sub-menu__link">pantalon</Link>
                                </li>
                                <li className="sub-menu__item">
                                    <Link to="" className="sub-menu__link">discos</Link>
                                </li> */}
                            </ul>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">Collections <box-icon name='chevron-down' type='solid' color='#ffffff' ></box-icon> </Link>
                        </li>
                    </ul>
                    <ul className=" menuSecond flex-row">
                        <li className="menuSecond__item">
                            <Link className="menuSecond__link" to="">Help </Link>
                        </li>
                        <i className="fa-solid fa-circle"></i>
                        <li className="menuSecond__item">
                            <Link className="menuSecond__link " to="">login</Link>
                        </li>
                    </ul>
                    <section className="mainBuscador">
                        <i className="fa-solid fa-magnifying-glass lupa"></i>
                    </section>
                    <Link to="/cart">
                        <section className="sectionCarrito">
                            < CartWidget />
                        </section>
                    </Link>
                </nav>

            </header>
        </>
    )
}

export default NavBar
