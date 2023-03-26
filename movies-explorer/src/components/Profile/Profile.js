import React from "react";
import "./Profile.css";
import {Link} from "react-router-dom";
import "../Header/Header.css";
import HeaderToMobile from "../Header/HeaderToMobile";
import HeaderBurger from "../Header/HeaderBurger";

function Profile() {
    return (
        <>
            <HeaderToMobile/>
            <HeaderBurger/>
            <section className="profile">
                <h1 className="profile__header">Привет, Мария!</h1>
                <form className="profile__form">
                    <div className="profile__input-container profile__input-container_type_top">
                        <label className="profile__label">Имя</label>
                        <input className="profile__input" type="text" defaultValue="Мария"/>
                    </div>
                    <div className="profile__input-container profile__input-container_type_bottom">
                        <label className="profile__label">E-mail</label>
                        <input className="profile__input" type="email" defaultValue="pochta@yandex.ru"/>
                    </div>
                    <button className="profile__button">Редактировать</button>
                </form>
                <Link to="/" className="profile__link">Выйти из аккаунта</Link>
            </section>
        </>
    )
}

export default Profile;
