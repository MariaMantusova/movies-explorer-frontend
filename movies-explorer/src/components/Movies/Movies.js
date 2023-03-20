import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import HeaderMobile from "../Header/HeaderMobile";
import HeaderToMobile from "../Header/HeaderToMobile";

function Movies() {
    return(
        <>
            <HeaderToMobile/>
            <HeaderMobile/>
            <SearchForm/>
            <MoviesCardList class="movie__save-button_active"/>
            <Preloader/>
            <Footer/>
        </>
    )
}

export default Movies;
