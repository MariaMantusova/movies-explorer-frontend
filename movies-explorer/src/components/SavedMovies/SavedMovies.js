import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import HeaderToMobile from "../Header/HeaderToMobile";
import HeaderBurger from "../Header/HeaderBurger";

function SavedMovies() {
    return (
        <>
            <HeaderToMobile/>
            <HeaderBurger/>
            <section className="saved-movies">
                <SearchForm/>
                <MoviesCardList class="movie__save-button_delete"/>
            </section>
            <Footer/>
        </>
    )
}

export default SavedMovies;
