import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Buttonaction from './ButtonAction';
import InputValidator from './InputValidator';
import Icon from '../assets/images/brand/icon.png';
import Letter from '../assets/images/brand/letter.png';
import '../styles/components/Login.scss';
import { authUser } from '../store/reducers/Auth.actionCreator';
import {
  showRecoverPassword,
  showRegisterForm,
} from '../store/reducers/Modals.actionCreator';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(
      authUser({
        email: loginData.email,
        password: loginData.password,
      })
    );
    navigate('/');
  };

  return (
    <form className="login">
      <header className="login__header">
        <div className="login__brand">
          <img src={Icon} alt="logoYoutube" className="login__brand__icon" />
          <img
            src={Letter}
            alt="letterYoutube"
            className="login__brand__letter"
          />
        </div>

        <h3 className="login__title"> Iniciar Sesión </h3>
      </header>
      <div className="login__content">
        {/* Email */}
        <InputValidator
          name="email"
          type="email"
          value={loginData.name}
          onChange={onChange}
          classname="login__input "
          placeholder="email"
          errorMessage="EL correo es requerido."
          required
        />

        {/* Password */}
        <InputValidator
          name="password"
          type="password"
          value={loginData.name}
          onChange={onChange}
          classname="login__input"
          placeholder="Contraseña"
          errorMessage="Minimo 8 caracteres e incluir 1 numero y 1 caracter especial"
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          required
        />

        {/* Recover */}
        <button
          type="button"
          className="login__link"
          onClick={() => dispatch(showRecoverPassword())}
        >
          ¿Olvidaste la contraseña?
        </button>
      </div>
      <div className="login__footer">
        <button
          type="button"
          className="login__link"
          onClick={() => dispatch(showRegisterForm())}
        >
          Registrarse
        </button>
        <Buttonaction
          className="btn-action--form"
          content="Acceder"
          type="submit"
          handleClick={handleSubmit}
        />
      </div>
    </form>
  );
}

export default Login;
