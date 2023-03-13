import React from "react";
import {Link} from "react-router-dom";
import Promo from "../Promo/Promo";
import Header from "../Header/Header";
import AboutProject from "../AboutProject/AboutProject";

function Main() {
    return (
        <>
            <Header>
                <div className="header__links">
                    <Link to="/sign-up" className="header__link header__link_type_registration">Регистрация</Link>
                    <Link to="/sign-in" className="header__link header__link_type_login">Войти</Link>
                </div>
            </Header>
            <main>
                <Promo/>
                <AboutProject/>
            </main>
        </>
    )
}

export default Main;
