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
            <img className="movie__image" src="https://netbasequid.com/wp-content/uploads/Hello-Kitty.png" alt="hello-kitty"/>
        </section>
    )
}

export default MoviesCard;
