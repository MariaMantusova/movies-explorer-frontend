import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
    return (
        <section className="movie">
            <div className="movie__container">
                <h2 className="movie__name">Hello Kitty</h2>
                <p className="movie__duration">1ч 35м</p>
                <button className={`movie__save-button ${props.class}`}></button>
            </div>
            <img className="movie__image" src="https://4lapy.ru/resize/800x463/upload/medialibrary/84c/84c48b8e8e4b57579667392f8936e5ba.jpg" alt="фото фильма"/>
        </section>
    )
}

export default MoviesCard;
