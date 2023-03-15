import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    return (
        <section className="movies">
            <MoviesCard class={`${props.class}`}/>
            <MoviesCard class={`${props.class}`}/>
            <MoviesCard class={`${props.class}`}/>
            <MoviesCard class={`${props.class}`}/>
            <MoviesCard class={`${props.class}`}/>
            <MoviesCard class={`${props.class}`}/>
            <MoviesCard class={`${props.class}`}/>
        </section>
    )

}

export default MoviesCardList;
