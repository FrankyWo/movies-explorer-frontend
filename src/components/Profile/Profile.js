import { CurrentUserContext } from "../../context/CurrentUserContext";
import React, { useContext, useEffect, useState } from "react";
import * as Yup from 'yup';
import Forms from "../../utils/validation";
import "./Profile.css";

function Profile(props) {
    const { values, errors, handleChange, handleSubmit, setValues } = Forms(props.updateUser);
    const [currentUserEdit, setCurrentUserEdit] = useState(false);
    const currentUser = useContext(CurrentUserContext);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
        setValues({ name: currentUser.name, email: currentUser.email }); // Обновляем начальные значения

        setIsButtonDisabled(true); // Кнопка по умолчанию блокирована
    }, [currentUser, setValues]);

    useEffect(() => {
        const hasNameChanged = values.name !== name;
        const hasEmailChanged = values.email !== email;

        setCurrentUserEdit(hasNameChanged || hasEmailChanged);

        // Обновляем состояние блокировки кнопки на основе изменений в данных
        setIsButtonDisabled(!(hasNameChanged || hasEmailChanged));
    }, [values, name, email]);

    return (
        <main>
            <section className="profile">
                <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                <form
                    name="user-data"
                    className="profile__form form"
                    onSubmit={handleSubmit}
                >
                    <label className="profile__label" htmlFor="name">
                        <span className="profile__subtitle">Имя</span>
                        <input
                            defaultValue={values.name || name}
                            className="profile__input"
                            onChange={handleChange}
                            placeholder="Имя"
                            maxLength="30"
                            minLength="2"
                            type="text"
                            name="name"
                            required
                        />
                    </label>
                    <label className="profile__label" htmlFor="email">
                        <span className="profile__subtitle profile__subtitle_bottom">E-mail</span>
                        <input
                            className="profile__input profile__input_bottom"
                            defaultValue={values.email || email}
                            onChange={handleChange}
                            placeholder="E-mail"
                            type="email"
                            name="email"
                            required
                        />
                    </label>
                    <button
                        className={`profile__btn profile__btn_type_edit ${isButtonDisabled && "profile__btn_disable"}`}
                        type="submit"
                        disabled={isButtonDisabled}
                    >
                        Редактировать
                    </button>
                </form>
                <button
                    className="profile__btn profile__btn_type_logout button"
                    onClick={props.onLogin}
                    type="button"
                >
                    Выйти из аккаунта
                </button>
            </section>
        </main>
    );
}

export default Profile;
