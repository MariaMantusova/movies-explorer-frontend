import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeaderToMobile from "../Header/HeaderToMobile";

function SavedMovies() {
    return (
        <>
            <HeaderToMobile/>
            <SearchForm/>
            <MoviesCardList class="movie__save-button_delete"/>
            <Footer/>
        </>
    )
}

export default SavedMovies;
