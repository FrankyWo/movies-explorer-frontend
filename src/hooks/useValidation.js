import { useState, useCallback } from 'react';
import { validateEmailInput } from '../utils/helpers';

function useValidation() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [isInputsValid, setInputsValidity] = useState({});

    const handleValidityChange = (e) => {
        validateEmailInput(e);

        setErrorMessages((messages) => ({
            ...messages,
            [e.target.name]: e.target.validationMessage,
        }));

        setInputsValidity((inputs) => ({
            ...inputs,
            [e.target.name]: e.target.validity.valid,
        }));

        setIsFormValid(e.target.closest('.form').checkValidity());
    };

    const resetValidation = useCallback(() => {
        setErrorMessages({});
        setInputsValidity({});
        setIsFormValid(false);
    }, []);

    return {
        errorMessages,
        isFormValid,
        isInputsValid,
        handleValidityChange,
        resetValidation,
    };
}

export { useValidation };
