import { CurrentUserContext } from "../../context/CurrentUserContext";
import React, { useContext, useEffect, useState } from "react";
import Forms from "../../utils/validation";
import "./Profile.css";

function Profile(props) {
    const { values, errors, handleChange, handleSubmit, setValues } = Forms(props.updateUser);
    const currentUser = useContext(CurrentUserContext);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        setValues({ name: currentUser.name, email: currentUser.email });
        setIsButtonDisabled(true);
    }, [currentUser, setValues]);

    useEffect(() => {
        const hasChanges = values.name !== currentUser.name || values.email !== currentUser.email;
        const isFormValid = Object.values(errors).every(error => error === "");

        setIsButtonDisabled(!isFormValid || !hasChanges);
    }, [values, errors, currentUser]);



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
                            defaultValue={values.name}
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
                            defaultValue={values.email}
                            onChange={handleChange}
                            placeholder="E-mail"
                            type="email"
                            name="email"
                            required
                            pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
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
