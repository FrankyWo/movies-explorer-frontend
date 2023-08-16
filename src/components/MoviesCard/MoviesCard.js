import { useState } from "react";
import React from "react";
import "./MoviesCard.css";

import image from '../../images/movie_pic_1.jpg';

const MoviesCard = ({ card, flag }) => {
    const [saveMovie, setSaveMovie] = useState(false);

    const handleSaveMovie = () => {
        if (!saveMovie && flag === "add-favorites-btn")
            return setSaveMovie(true);

        return setSaveMovie(false);
    };

    return (
        <li className="movies-card__card">
            <div className="movies-card__info">
                <div className="movies-card__info-container">
                    <h2 className="movies-card__title">{card.name}</h2>
                    <p className="movies-card__time">{card.duration}</p>
                </div>
                <button
                    className={`movies-card__${flag} movies-card__${flag}_${saveMovie
                            ? "active"
                            : ""
                        }`}
                    onClick={handleSaveMovie}
                    type="button"
                />
            </div>
                <img className='movie-card__image' src={image} alt='В погоне за Бенкси' />
        </li>
    );
};

export default MoviesCard;
