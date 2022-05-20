import React, { useState } from 'react';
import Buttonaction from './ButtonAction';
import InputValidator from './InputValidator';
import Icon from '../images/brand/icon.png';
import Letter from '../images/brand/letter.png';
import '../styles/components/Login.scss';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const onChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
        <a href=";" className="form__link">
          Olvidaste la contraseña
        </a>
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
