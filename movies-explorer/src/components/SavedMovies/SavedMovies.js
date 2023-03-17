import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import HeaderLinks from "../Header/HeaderLinks";

function SavedMovies() {
    return(
        <>
            <Header>
                <HeaderLinks/>
            </Header>
            <SearchForm/>
            <MoviesCardList class="movie__save-button_delete"/>
            <Footer/>
        </>
    )
}

export default SavedMovies;
