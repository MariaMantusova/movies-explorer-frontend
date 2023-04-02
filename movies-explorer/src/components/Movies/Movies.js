import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import HeaderToMobile from "../Header/HeaderToMobile";
import HeaderBurger from "../Header/HeaderBurger";

function Movies(props) {
    return (
        <>
            <HeaderToMobile/>
            <HeaderBurger/>
            <section className="movies">
                <SearchForm handleChange={props.handleKeyChange} value={props.keyWord} onSubmit={props.onSubmit}/>
                <MoviesCardList keyWord={props.keyWord} movies={props.moviesFiltered} isLoading={props.isLoading} savedMovies={props.savedMovies} saveMovie={props.onSaveClick}/>
            </section>
            <Footer/>
        </>
    )
}

export default Movies;
