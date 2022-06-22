import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Buttonaction from './ButtonAction';
import InputValidator from './InputValidator';
import Icon from '../assets/images/brand/icon.png';
import Letter from '../assets/images/brand/letter.png';
import '../styles/components/Login.scss';
import { authUser } from '../store/reducers/Auth.reducer';
import { showRecoverPassword } from '../store/reducers/Modals.reducer';

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
    navigate('/user');
  };

  return (
    <form>
      <header>
        <div className="form__header">
          <img src={Icon} alt="logoYoutube" className="brand__icon" />
          <img src={Letter} alt="letterYoutube" className="brand__letter" />
        </div>
        <p className="form__subtitle"> Login </p>
      </header>
      <div className="form__content">
        <InputValidator
          name="email"
          type="email"
          value={loginData.name}
          onChange={onChange}
          classname="input__Login --span"
          placeholder="email"
          errorMessage="Mensaje de email"
          required
        />
        <InputValidator
          name="password"
          type="password"
          value={loginData.name}
          onChange={onChange}
          classname="input__Login --span"
          placeholder="password"
          errorMessage="Minimo 8 caracteres e incluir 1 numero y 1 caracter especial"
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          required
        />
      </div>
      <div className="form__footer">
        <button
          type="button"
          className="form__link"
          onClick={() => dispatch(showRecoverPassword())}
        >
          Olvidaste la contraseña
        </button>
        <Buttonaction
          className="btn-action--form"
          content="Next"
          type="submit"
          handleClick={handleSubmit}
        />
      </div>
    </form>
  );
}

export default Login;
