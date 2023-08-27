import React from "react";
import { Navigate } from "react-router-dom";
import Authorization from "../Authorization/Authorization";

function Register(props) {
    return (!props.auth
        ? <main>
            <Authorization
                name={["name", "email", "password"]}
                text="Уже зарегистрированы?"
                button="Зарегистрироваться"
                title="Добро пожаловать!"
                onLogin={props.onLogin}
                authType="register"
                linkRout="/signin"
                link="Войти"
            />
        </main>
        : <Navigate to="/movies" />
    );
}

export default Register;
