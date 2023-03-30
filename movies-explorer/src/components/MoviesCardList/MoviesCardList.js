import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    const [isLoading, setIsLoading] = React.useState(false);

    return (
        <section className="movies">
            {props.movies.length <= 0 && <h2 className="movies__text">Не найдено фильмов для отображения</h2>}
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
