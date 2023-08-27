import Preloader from "./Preloader/Preloader";
import React, { useEffect, useState } from "react";
import "./Movies.css";

import SearchErrorServer from "./SearchErrorServer/SearchErrorServer";
import SearchForm from "./SearchForm/SearchForm";
import SearchError from "./SearchError/SearchError";
import { searchCards } from "../../utils/searchMovies";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import * as moviesApi from "../../utils/MoviesApi";


const Movies = (props) => {
    const [requestError, setRequestError] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [render, setRender] = useState(true);
    const [movies, setMovies] = useState([]);

    const handleMoviesReset = () => {
        setMovies([]);
    }

    const handleSearchCards = async (line, checkbox) => {
        try {
            setRender(false);
            setRequestError(false);
            setNotFound(false);
            const data = await moviesApi.getMovies();
            const findMovies = searchCards(data, line, checkbox);

            if (findMovies.length === 0) setNotFound(true);
            else setNotFound(false);

            setMovies(findMovies);
            setRender(true);
        } catch (e) {
            setRequestError(true);
            console.warn(e);
        }
    };

    useEffect(() => {
        const findMovies = JSON.parse(localStorage.getItem("findMovies"));
        if (findMovies) setMovies(findMovies);
    }, []);

    return (
        <main className="content">
            <div className="movies">
                <SearchForm onCard={handleSearchCards} onReset={handleMoviesReset} />
                {notFound && <SearchError />}
                {requestError && <SearchErrorServer />}
                {render
                    ? <MoviesCardList
                        savedMovies={props.savedMovies}
                        onDelete={props.onDelete}
                        flag="add-favorites-btn"
                        onSave={props.onSave}
                        cards={movies} />
                    : <Preloader />
                }
            </div>
        </main>
    );
};

export default Movies;
