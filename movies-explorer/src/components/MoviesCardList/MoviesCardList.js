import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    return (
        <section className="movies">
            <ul className="movies__items">
                <li className="movies__item">
                    <MoviesCard class={`${props.class}`}/>
                </li>
                <li className="movies__item">
                    <MoviesCard class={`${props.class}`}/>
                </li>
                <li className="movies__item">
                    <MoviesCard class={`${props.class}`}/>
                </li>
                <li className="movies__item">
                    <MoviesCard class={`${props.class}`}/>
                </li>
                <li className="movies__item">
                    <MoviesCard class={`${props.class}`}/>
                </li>
                <li className="movies__item">
                    <MoviesCard class={`${props.class}`}/>
                </li>
                <li className="movies__item">
                    <MoviesCard class={`${props.class}`}/>
                </li>
            </ul>
        </section>
    )

}

export default MoviesCardList;
