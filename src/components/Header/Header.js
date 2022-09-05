import React from "react";
import logo from "../../assets/logo.svg"


const Header = () =>{
    return (
        <>
        <header>
            <nav>
                <a href="">
                    <picture>
                        <img src={logo} alt="logo" />
                    </picture>
                </a>
            </nav>
        </header>
        </>
    )
}

export default Header
