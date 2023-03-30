import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
    return (
        <section className="movie" key={props.movie._id}>
            <div className="movie__container">
                <h2 className="movie__name">{props.movie.nameRU}</h2>
                <p className="movie__duration">{props.movie.duration} мин</p>
                <button className={`movie__save-button ${props.class}`}></button>
            </div>
            <img className="movie__image" src={`https://api.nomoreparties.co/${props.movie.image.url}`} alt="фото фильма"/>
        </section>
    )
}

export default MoviesCard;
