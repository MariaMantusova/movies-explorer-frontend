import React from "react";
import "./Profile.css";
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
        </>
    )
}

export default Profile;
