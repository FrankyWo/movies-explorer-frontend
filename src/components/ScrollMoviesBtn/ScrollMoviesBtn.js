import "./ScrollMoviesBtn.css";
import React from "react";

function ScrollMoviesBtn({cards}) {
    return (
        <div
            className={cards.length < 9
                ? 'scroll-movies-btn scroll-movies-btn_none'
                : 'scroll-movies-btn button'}>
            <button
                className={cards.length < 9
                    ? "scroll-movies-btn__button-none"
                    : "scroll-movies-btn__button button"}
                type="button">
                Ещё
            </button>
        </div>
    );
}

export default ScrollMoviesBtn;
