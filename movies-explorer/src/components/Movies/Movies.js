import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeaderToMobile from "../Header/HeaderToMobile";
import HeaderMobile from "../Header/HeaderMobile";
import HeaderBurger from "../Header/HeaderBurger";

function Movies() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <HeaderToMobile/>
            <HeaderBurger/>
            <section className="movies">
                <SearchForm/>
                <MoviesCardList class="movie__save-button_active"/>
                <Preloader/>
            </section>
            <Footer/>
        </>
    )
}

export default Movies;
