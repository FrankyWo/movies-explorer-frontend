import React from "react";
import "../NavProfileBtn/NavProfileBtn.css";
import "./Navigation.css";
import close from "../../../images/close.svg";
import { Link, NavLink } from "react-router-dom";


function Navigation(props) {
    return (
        <div
            className={
                props.isOpen ? `navigation navigation_is-opened` : `navigation`
            }>
            <div className="navigation__content">
                <button
                    className="navigation__close"
                    type="button"
                    onClick={props.onClick}>
                    <img className="navigation__close-img button" src={close} alt="закрыть" />
                </button>
                <nav>
                    <ul className="navigation__links">
                        <li className="navigation__link-container">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "navigation__link navigation__link_active link"
                                        : "navigation__link link"
                                }>
                                Главная
                            </NavLink>
                        </li>
                        <li className="navigation__link-container">
                            <NavLink
                                to="/movies"
                                className={({ isActive }) =>
                                    isActive
                                        ? "navigation__link navigation__link_active link"
                                        : "navigation__link link"
                                }>
                                Фильмы
                            </NavLink>
                        </li>
                        <li className="navigation__link-container">
                            <NavLink
                                to="/saved-movies"
                                className={({ isActive }) =>
                                    isActive
                                        ? "navigation__link navigation__link_active link"
                                        : "navigation__link link"
                                }>
                                Сохранённые фильмы
                            </NavLink>
                        </li>
                        <li className="navigation__link-container">
                            <Link
                                className="nav-profile-btn-link nav-profile-btn__display_open link"
                                to="/profile">
                                Аккаунт
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;