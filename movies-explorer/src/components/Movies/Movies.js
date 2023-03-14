import React from "react";
import {Link} from "react-router-dom";
import "./Movies.css";
import Header from "../Header/Header";
import iconProfile from "../../images/icon-profile.png";

function Movies() {
    return(
        <>
            <Header>
                <div className="header__links-container">
                    <Link to="/movies" className="header__nav-link">Фильмы</Link>
                    <Link to="/saved-movies" className="header__nav-link">Сохранённые фильмы</Link>
                    <Link to="/profile" className="header__nav-link">
                        <p className="header__nav-link-text">Аккаунт</p>
                        <div className="header__nav-link-icon-background">
                            <img className="header__nav-link-icon" src={iconProfile} alt="Иконка профиля"/>
                        </div>
                    </Link>
                </div>
            </Header>
        </>
    )
}

export default Movies;
