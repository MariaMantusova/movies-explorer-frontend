import React from "react";
import "./HeaderBurger.css";
import {GrMenu} from "react-icons/gr";
import Header from "./Header";
import HeaderLinks from "./HeaderLinks";

function HeaderBurger() {
    return(
        <div className="header header-burger">
            <Header>
                <GrMenu className="burger"/>
            </Header>
        </div>
    )
}

export default HeaderBurger;
