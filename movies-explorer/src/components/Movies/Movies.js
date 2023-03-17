import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import HeaderLinks from "../Header/HeaderLinks";

function Movies() {
    return(
        <>
            <Header>
                <HeaderLinks/>
            </Header>
            <SearchForm/>
            <MoviesCardList class="movie__save-button_active"/>
            <Preloader/>
            <Footer/>
        </>
    )
}

export default Movies;
