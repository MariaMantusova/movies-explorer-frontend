import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [moviesPerPage, setMoviesPerPage] = React.useState(7);

    React.useEffect(() => {
        if (document.documentElement.clientWidth < 450) {
            setMoviesPerPage(5)
        }
    }, [])

    const lastMovieIndex = currentPage * moviesPerPage;
    const currentMovie = props.movies.slice(1, lastMovieIndex);

    function paginate() {
        setCurrentPage(prevState => prevState + 1);
    }

    return (
        <section className="movies">
            {props.movies.length <= 0 && !props.isLoading && <h2 className="movies__text">Не найдено фильмов для отображения</h2>}
            {props.isLoading && <Preloader/>}
            <ul className="movies__items">
                {currentMovie.map((movie, index) => (
                    <li className="movies__item" key={index} >
                        <MoviesCard movies={props.movies} movie={movie} key={index}
                                    saveClick={props.saveMovie}/>
                    </li>
            ))}
            </ul>
            {props.movies.length > 7 && <button className="movies__adding-button" onClick={paginate}>Ещё</button>}
        </section>
    )

}

export default MoviesCardList;
