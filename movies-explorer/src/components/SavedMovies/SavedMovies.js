import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function SavedMovies() {
    return (
        <>
            <Header>

            </Header>
            <SearchForm/>
            <MoviesCardList class="movie__save-button_delete"/>
            <Footer/>
        </>
    )
}

export default SavedMovies;
