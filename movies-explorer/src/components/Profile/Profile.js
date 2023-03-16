import React from "react";
import "./Profile.css";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import {NavLink} from "react-router-dom";
import iconProfile from "../../images/icon-profile.svg";

function Profile() {
    return(
        <>
            <Header>
                <div className="header__links-container">
                    <NavLink to="/movies"
                             className={({isActive}) => `header__nav-link ${isActive ? "header__nav-link_active" : ""}`}>Фильмы</NavLink>
                    <NavLink to="/saved-movies"
                             className={({isActive}) => `header__nav-link ${isActive ? "header__nav-link_active" : ""}`}>Сохранённые
                        фильмы</NavLink>
                    <NavLink to="/profile"
                             className={({isActive}) => `header__nav-link ${isActive ? "header__nav-link_active" : ""}`}>
                        <p className="header__nav-link-text">Аккаунт</p>
                        <div className="header__nav-link-icon-background">
                            <img className="header__nav-link-icon" src={iconProfile} alt="Иконка профиля"/>
                        </div>
                    </NavLink>
                </div>
            </Header>
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
