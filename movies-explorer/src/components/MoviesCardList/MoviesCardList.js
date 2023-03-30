import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    const [movies, setMovies] = React.useState([]);

    return (
        <section className="movies">
            {movies.length <= 0 && <h2 className="movies__text">Не найдено фильмов для отображения</h2>}
            <ul className="movies__items">
                <li className="movies__item">
                    <MoviesCard class={`${props.class}`}/>
                </li>
            </ul>
            {movies.length > 7 && <button className="movies__adding-button">Ещё</button>}
        </section>
    )

}

export default MoviesCardList;
