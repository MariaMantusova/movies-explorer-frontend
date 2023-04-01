import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import HeaderToMobile from "../Header/HeaderToMobile";
import HeaderBurger from "../Header/HeaderBurger";

function SavedMovies(props) {
    return (
        <>
            <HeaderToMobile/>
            <HeaderBurger/>
            <section className="saved-movies">
                <SearchForm handleChange={props.handleKeyChange} value={props.keyWord} onSubmit={props}/>
                <MoviesCardList class="movie__save-button_delete" movies={props.savedMovies} isLoading={props.isLoading}/>
            </section>
            <Footer/>
        </>
    )
}

export default SavedMovies;
