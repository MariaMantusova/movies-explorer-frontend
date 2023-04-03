import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import HeaderToMobile from "../Header/HeaderToMobile";
import HeaderBurger from "../Header/HeaderBurger";

function SavedMovies(props) {
    const [savedMoviesFiltered, setSavedMoviesFiltered] = React.useState([]);

    React.useEffect(() => {
        setSavedMoviesFiltered(props.savedMovies);
    }, [])

    React.useEffect(() => {
        setSavedMoviesFiltered(savedMoviesFilter)
    }, [props.savedMovies])

    function handleSubmitFilterSavedMovies() {
        props.setIsLoading(true);
        setSavedMoviesFiltered(savedMoviesFilter)
        props.setIsLoading(false);
    }

    function savedMoviesFilter() {
        let savedFilteredMovies = []

        props.savedMovies.forEach((movie) => {
            if (movie.nameRU.toLowerCase().includes(props.keyWord.toLowerCase()) || movie.nameEN.toLowerCase().includes(props.keyWord.toLowerCase())
                || movie.director.toLowerCase().includes(props.keyWord.toLowerCase())
                || movie.description.toLowerCase().includes(props.keyWord.toLowerCase())) {
                savedFilteredMovies.push(movie);

                if (localStorage.getItem("shortsState") !== null) {
                    savedFilteredMovies = savedFilteredMovies.filter((movie) => movie.duration <= 40)
                }
            }
        })

        return savedFilteredMovies;
    }

    return (
        <>
            <HeaderToMobile/>
            <HeaderBurger/>
            <section className="saved-movies">
                <SearchForm handleChange={props.handleKeyChange} value={props.keyWord} onSubmit={handleSubmitFilterSavedMovies}/>
                <MoviesCardList class="movie__save-button_delete" onDelete={props.onDeleteClick} movies={savedMoviesFiltered} isLoading={props.isLoading}/>
            </section>
            <Footer/>
        </>
    )
}

export default SavedMovies;
