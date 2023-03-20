import React from "react";
import Header from "./Header";
import HeaderLinks from "./HeaderLinks";

function HeaderToMobile() {
    return (
        <div className="header header-to-mobile">
            <Header>
                <HeaderLinks/>
            </Header>
        </div>
    )
}

export default HeaderToMobile;
