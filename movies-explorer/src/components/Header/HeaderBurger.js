import React from "react";
import "./HeaderBurger.css";
import {GrMenu} from "react-icons/gr";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";

function HeaderBurger() {
    const [open, setOpen] = React.useState(false);

    return(
        <div className="header header-burger">
            <Header>
                <GrMenu className="burger" onClick={() => setOpen(!open)}/>
                <HeaderMobile opened={open}/>
            </Header>
        </div>
    )
}

export default HeaderBurger;
