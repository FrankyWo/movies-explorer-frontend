import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Register.css';
import { Authorization, FormBlockWithInput } from '../../components';
import { useInput, useValidation } from '../../hooks';

function Register({
    onSignup,
    isLoading,
    isLoggedIn,
    formMessage,
    resetFormMessage,
}) {
    const navigate = useNavigate();

    const { values: singupData, handleInputChange } = useInput({
        email: '',
        password: '',
        name: '',
    });

    const { errorMessages, isFormValid, isInputsValid, handleValidityChange } =
        useValidation();

    function handleChange(evt) {
        if (formMessage) resetFormMessage();
        handleInputChange(evt);
        handleValidityChange(evt);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onSignup(singupData);
    }

    useEffect(() => {
        isLoggedIn && navigate('/', { replace: true });
    }, [isLoggedIn, navigate]);

    useEffect(() => {
        resetFormMessage();
    }, [resetFormMessage]);

    return (
        <Authorization
            title='Добро пожаловать!'
            pageName='register'
            btnText='Зарегистрироваться'
            formMessage={formMessage}
            isLoading={isLoading}
            isFormValid={isFormValid}
            onSubmit={handleSubmit}>
            <FormBlockWithInput
                mode='column'
                blockName='Имя'
                errorMessage={errorMessages.name}
                type='text'
                name='name'
                placeholder='Введите имя'
                minLength='2'
                maxLength='30'
                value={singupData.name}
                onChange={handleChange}
                isValid={isInputsValid.name}
                required
            />
            <FormBlockWithInput
                mode='column'
                blockName='E-mail'
                errorMessage={errorMessages.email}
                type='email'
                name='email'
                placeholder='Введите Email'
                value={singupData.email}
                onChange={handleChange}
                isValid={isInputsValid.email}
                required
            />
            <FormBlockWithInput
                mode='column'
                blockName='Пароль'
                errorMessage={errorMessages.password}
                type='password'
                name='password'
                minLength={6}
                placeholder='Введите пароль'
                value={singupData.password}
                onChange={handleChange}
                isValid={isInputsValid.password}
                required
            />
        </Authorization>
    );
}

export { Register };
