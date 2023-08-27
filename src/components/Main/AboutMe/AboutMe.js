import React from "react";
import "./AboutMe.css";
import Portfolio from "./Portfolio/Portfolio";
import photo from "../../../images/pic__COLOR_pic.jpg";

function AboutMe() {
    return (
        <section className="about-me">
            <h1 className="about-me__title">Студент</h1>
            <div className="about-me__container">
                <div className="about-me__description">
                    <h2 className="about-me__name">Виталий</h2>
                    <p className="about-me__about">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__biography">
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
                        Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
                        фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <p className="about-me__info">
                        <a
                            href="https://github.com/FrankyWo"
                            className="about-me__github-link link"
                            rel="noreferrer"
                            target="_blank">
                            Github
                        </a>
                    </p>
                </div>
                <img className="about-me__photo" src={photo} alt="John Doe" />
            </div>
            <Portfolio />
        </section>
    );
}

export default AboutMe;
