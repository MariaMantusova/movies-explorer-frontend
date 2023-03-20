import React from "react";
import "./HeaderMobile.css";
import {NavLink} from "react-router-dom";
import iconProfile from "../../images/icon-profile.svg";
import {GrClose} from "react-icons/gr";

function HeaderMobile(props) {
    return (
        <>
            {props.opened &&
            <div className="header-mobile__links-around">
                <nav className="header-mobile__links">
                    <GrClose className="burger-close"/>
                    <div className="header-mobile__links-container">
                        <NavLink to="/"
                                 className={({isActive}) => `header-mobile__nav-link ${isActive ? "header-mobile__nav-link_active" : ""}`}>Главная</NavLink>
                        <NavLink to="/movies"
                                 className={({isActive}) => `header-mobile__nav-link ${isActive ? "header-mobile__nav-link_active" : ""}`}>Фильмы</NavLink>
                        <NavLink to="/saved-movies"
                                 className={({isActive}) => `header-mobile__nav-link ${isActive ? "header-mobile__nav-link_active" : ""}`}>Сохранённые
                            фильмы</NavLink>
                    </div>
                    <NavLink to="/profile"
                             className={({isActive}) => `header-mobile__nav-link header-mobile__nav-link-profile ${isActive ? "header-mobile__nav-link_active" : ""}`}>
                        <p className="header-mobile__nav-link-text">Аккаунт</p>
                        <div className="header-mobile__nav-link-icon-background">
                            <img className="header-mobile__nav-link-icon" src={iconProfile} alt="Иконка профиля"/>
                        </div>
                    </NavLink>
                </nav>
            </div>}
        </>
    )
}

export default HeaderMobile;
