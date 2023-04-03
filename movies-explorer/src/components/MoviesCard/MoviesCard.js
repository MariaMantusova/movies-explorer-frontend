import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
    const image = `https://api.nomoreparties.co/${props.movie.image.url}`;
    const movieDurationHours = Math.floor(props.movie.duration / 60);
    const movieDurationMinutes = props.movie.duration - (movieDurationHours * 60);

    function handleSaveMovie(evt) {
        evt.preventDefault()

        props.saveClick(props.movie);
    }

    function handleDeleteMovie(evt) {
        evt.preventDefault()

        props.deleteClick(props.movie._id);
    }

    return (
        <section className="movie" key={props.movie._id}>
            <div className="movie__container">
                <h2 className="movie__name">{props.movie.nameRU}</h2>
                <p className="movie__duration">{`${movieDurationHours !== 0 ? `${movieDurationHours}ч` : ""} ${movieDurationMinutes}м`}</p>
                <button className={`movie__save-button ${props.movie.savedId !== "" && props.class}`} onClick={props.movie._id ? handleDeleteMovie : handleSaveMovie}></button>
            </div>
            <img className="movie__image" src={image} alt={props.movie.nameRU}/>
        </section>
    )
}

export default MoviesCard;
