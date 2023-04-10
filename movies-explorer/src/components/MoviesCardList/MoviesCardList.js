import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [moviesPerPage, setMoviesPerPage] = React.useState(7);
    const setWindowDimensions = () => {
        if (document.documentElement.clientWidth > 450) {
            setMoviesPerPage(7)
        } else if (document.documentElement.clientWidth < 450) {
            setMoviesPerPage(5)
        }
    }

    React.useEffect(() => {
        setCurrentPage(1);
    }, [props.keyWord])

    React.useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
    }, [])

    const lastMovieIndex = currentPage * moviesPerPage;
    const currentMovie = props.movies.slice(0, lastMovieIndex);
    const lastPage = Math.ceil(props.movies.length / moviesPerPage)

    function paginate() {
        setCurrentPage(prevState => prevState + 1);
    }

    return (
        <section className="movies">
            {props.children}
            {props.movies.length <= 0 && !props.isLoading && props.keyWordSaved === "" && <h2 className="movies__text">Вы еще не сохраняли фильмы</h2>}
            {props.movies.length <= 0 && !props.isLoading && props.state && <h2 className="movies__text">Не найдено фильмов для отображения</h2>}
            {props.isLoading && <Preloader/>}
            <ul className="movies__items">
                {currentMovie.map((movie, index) => (
                    <li className="movies__item" key={index}>
                        <a className="movies__item-link" href={movie.trailerLink} target="_blank" >
                        <MoviesCard movies={props.movies} movie={movie} key={index} deleteClick={props.onDelete}
                                    saveClick={props.saveMovie} class={props.class}/>
                        </a>
                    </li>
            ))}
            </ul>
            {(props.movies.length > 7 && currentPage !== lastPage) && <button className="movies__adding-button" onClick={paginate}>Ещё</button>}
        </section>
    )

}

export default MoviesCardList;
