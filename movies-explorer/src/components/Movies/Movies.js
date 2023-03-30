import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import HeaderToMobile from "../Header/HeaderToMobile";
import HeaderBurger from "../Header/HeaderBurger";

function Movies() {
    return (
        <>
            <HeaderToMobile/>
            <HeaderBurger/>
            <section className="movies">
                <SearchForm/>
                <MoviesCardList/>
            </section>
            <Footer/>
        </>
    )
}

export default Movies;
