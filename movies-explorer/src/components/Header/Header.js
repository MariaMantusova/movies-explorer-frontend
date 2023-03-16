import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import logoImage from "../../images/logo.svg";

function Header(props) {
    return(
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={logoImage} alt="logo"/>
            </Link>
            {props.children}
        </header>
    )
}

export default Header;
