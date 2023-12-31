import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';
import { Authorization, FormBlockWithInput } from '../../components/';
import { useInput, useValidation } from '../../hooks';

function Login({
  onSignin,
  isLoading,
  isLoggedIn,
  formMessage,
  resetFormMessage,
}) {
  const navigate = useNavigate();
  const { values: loginData, handleInputChange } = useInput({
    email: '',
    password: '',
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
    onSignin(loginData);
  }

  useEffect(() => {
    isLoggedIn && navigate('/', { replace: true });
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    resetFormMessage();
  }, [resetFormMessage]);

  return (
    <Authorization
      title='Рады видеть!'
      pageName='login'
      btnText='Войти'
      formMessage={formMessage}
      isLoading={isLoading}
      isFormValid={isFormValid}
      onSubmit={handleSubmit}>
      <FormBlockWithInput
        mode='column'
        blockName='E-mail'
        errorMessage={errorMessages.email}
        type='email'
        name='email'
        placeholder='Введите Email'
        value={loginData.email}
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
        placeholder='Введите пароль'
        value={loginData.password}
        onChange={handleChange}
        isValid={isInputsValid.password}
        required
      />
    </Authorization>
  );
}

export { Login };
