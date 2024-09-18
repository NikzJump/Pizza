import React from "react";
import logo from "D:/PRG/www/Pizza/app/src/assets/img/pizza-logo.svg"
import CartButton from "./CartButton";

function Header() {
    return(
        <div>
            <div className="header">
                <div className="container">
                    <div className="header__logo">
                        <img width="38" src={logo} alt="Pizza logo" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>Cамая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                    <CartButton />
                </div>
            </div>
        </div>
    )
}

export default Header