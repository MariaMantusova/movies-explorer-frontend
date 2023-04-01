import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
    const classActive = `movie__save-button ${props.movie.savedId !== "" && "movie__save-button_active"}`
    const image = `https://api.nomoreparties.co/${props.movie.image.url}`

    function handleSaveMovie() {
        props.saveClick(props.movie);
    }

    return (
        <section className="movie" key={props.movie._id}>
            <div className="movie__container">
                <h2 className="movie__name">{props.movie.nameRU}</h2>
                <p className="movie__duration">{props.movie.duration} мин</p>
                <button className={classActive} onClick={handleSaveMovie}></button>
            </div>
            <img className="movie__image" src={image} alt={props.movie.nameRU}/>
        </section>
    )
}

export default MoviesCard;
