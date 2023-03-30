import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import HeaderToMobile from "../Header/HeaderToMobile";
import HeaderBurger from "../Header/HeaderBurger";

function Movies(props) {
    const [moviesFiltered, setMoviesFiltered] = React.useState([]);
    const [keyWord, setKeyWord] = React.useState("");

    function handleKeyWordChange(e) {
        setKeyWord(e.target.value);
        setMoviesFiltered(filterMovies)
    }

    function filterMovies() {
        let filteredMovies = []

        props.getMovies.filter((movie) => {
            if (movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()) || movie.nameEN.toLowerCase().includes(keyWord.toLowerCase())
                || movie.director.toLowerCase().includes(keyWord.toLowerCase())
                || movie.description.toLowerCase().includes(keyWord.toLowerCase())) {
                filteredMovies.push(movie)
            }
        })

        return filteredMovies;
    }

    return (
        <>
            <HeaderToMobile/>
            <HeaderBurger/>
            <section className="movies">
                <SearchForm handleChange={handleKeyWordChange} value={keyWord}/>
                <MoviesCardList movies={moviesFiltered}/>
            </section>
            <Footer/>
        </>
    )
}

export default Movies;
