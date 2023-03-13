import React from "react";
import "./Header.css";
import logoImage from "../../images/logo.svg";

function Header(props) {
    return(
        <header className="header">
            <img className="header__logo" src={logoImage} alt="logo"/>
            {props.children}
        </header>
    )
}

export default Header;
