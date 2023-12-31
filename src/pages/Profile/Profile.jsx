import { useContext, useEffect, useState } from 'react';

import './Profile.css';
import { CurrentUserContext } from '../../contexts';
import { Form, FormBlockWithInput } from '../../components';
import { useInput, useValidation } from '../../hooks';

function Profile({
    onUpdateUser,
    onSignOut,
    isLoading,
    formMessage,
    resetFormMessage,
    formMessageType,
}) {
    const { name, email } = useContext(CurrentUserContext);
    const [isEditMode, setEditModeState] = useState(false);
    const [isSubmitForbidden, setIsSubmitForbidden] = useState(true);

    const {
        values: userData,
        setValues: setUserData,
        handleInputChange,
    } = useInput({
        name,
        email,
    });

    const {
        errorMessages,
        isFormValid,
        isInputsValid,
        handleValidityChange,
        resetValidation,
    } = useValidation();

    const handleChange = (evt) => {
        if (formMessage) resetFormMessage();
        handleInputChange(evt);
        handleValidityChange(evt);
    };

    const handleInfoEdit = () => {
        setEditModeState(true);
        resetFormMessage();
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await onUpdateUser(userData);
    };

    const handleBackBtnClick = () => {
        setEditModeState(false);
        setUserData({ name, email });
        resetValidation();
    };

    useEffect(() => {
        const isRequestWithError = formMessage && formMessageType === 'error';
        const isUserDataTheSame =
            name === userData.name.trim() && email === userData.email.trim();
        setIsSubmitForbidden(isRequestWithError || isUserDataTheSame);
    }, [
        name,
        email,
        userData.name,
        userData.email,
        formMessage,
        formMessageType,
    ]);

    useEffect(() => {
        setUserData({ name, email });
        setEditModeState(false);
    }, [name, email, setUserData]);

    useEffect(() => {
        resetFormMessage();
    }, [resetFormMessage]);

    return (
        <section className={`container section profile`}>
            <h1 className='section__title profile__title'>{`Привет, ${name}!`}</h1>
            <Form
                name='profile'
                onSubmit={handleSubmit}
                isLoading={isLoading}
                formMessage={formMessage}
                formMessageType={formMessageType}
                isFormValid={isFormValid}
                isSubmitForbidden={isSubmitForbidden}
                isEditMode={isEditMode}>
                <FormBlockWithInput
                    mode='row'
                    blockName='Имя'
                    errorMessage={errorMessages.name}
                    type='text'
                    name='name'
                    placeholder='Введите имя'
                    minLength='2'
                    maxLength='30'
                    value={userData.name}
                    onChange={handleChange}
                    isValid={isInputsValid.name}
                    required
                    disabled={!isEditMode}
                />
                <FormBlockWithInput
                    mode='row'
                    blockName='E-mail'
                    errorMessage={errorMessages.email}
                    type='email'
                    name='email'
                    placeholder='Введите Email'
                    value={userData.email}
                    onChange={handleChange}
                    isValid={isInputsValid.email}
                    required
                    disabled={!isEditMode}
                />
            </Form>
            <div className='controls'>
                {isEditMode ? (
                    <button
                        type='button'
                        className='btn controls__btn controls__btn_theme_normal hover-effect hover-effect_type_opacity-60
        '
                        onClick={handleBackBtnClick}>
                        Назад
                    </button>
                ) : (
                    <>
                        <button
                            onClick={handleInfoEdit}
                            type='button'
                            className='btn controls__btn controls__btn_theme_normal hover-effect hover-effect_type_opacity-60
            '>
                            Редактировать
                        </button>
                        <button
                            onClick={onSignOut}
                            type='button'
                            className='btn controls__btn controls__btn_theme_important hover-effect hover-effect_type_opacity-60
            '>
                            Выйти из аккаунта
                        </button>
                    </>
                )}
            </div>
        </section>
    );
}

export { Profile };
