import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className='footer'>
            <h1 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h1>
            <div className="footer__container">
                <p className='footer__copy'>&copy; 2023</p>
                <nav className="footer__links-nav">
                    <ul className="footer__links">
                        <li className="footer__link link">
                            <a
                                href='https://practicum.yandex.ru'
                                className="footer__link-item"
                                rel="noreferrer"
                                target="_blank">
                                Яндекс.Практикум
                            </a>
                        </li>
                        <li className='footer__link link'>
                            <a
                                href='https://github.com/FrankyWo'
                                className="footer__link-item"
                                rel="noreferrer"
                                target="_blank">
                                Github
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;