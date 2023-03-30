import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
    return (
        <section className="movies">
            {props.movies.length <= 0 && !props.isLoading && <h2 className="movies__text">Не найдено фильмов для отображения</h2>}
            {props.isLoading && <Preloader/>}
            <ul className="movies__items">
                {props.movies.map((movie, index) => (
                    <li className="movies__item" key={index} >
                        <MoviesCard movie={movie} key={index} />
                    </li>
            ))}
            </ul>
            {props.movies.length > 7 && <button className="movies__adding-button">Ещё</button>}
        </section>
    )

}

export default MoviesCardList;
