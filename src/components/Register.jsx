import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showLoginForm } from '../store/reducers/Modals.reducer';
import ButtonAction from './ButtonAction';
import InputValidator from './InputValidator';

import Icon from '../images/brand/icon.png';
import Letter from '../images/brand/letter.png';
import '../styles/components/Login.scss';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const dispatch = useDispatch();

  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('envie datos del formulario', formData);
  };

  return (
    <form>
      <header>
        <div className="form__header">
          <img src={Icon} alt="logoYoutube" className="brand__icon" />
          <img src={Letter} alt="letterYoutube" className="brand__letter" />
        </div>
        <p className="form__subtitle"> Crea tu cuenta </p>
      </header>
      <div className="form__content">
        <InputValidator
          name="firstName"
          value={formData.name}
          type="text"
          classname="input__Login"
          placeholder="First name"
          onChange={onChange}
          errorMessage="Nombre no debe estar vacio"
          required
        />
        <InputValidator
          name="lastName"
          value={formData.name}
          type="text"
          classname="input__Login"
          placeholder="Last name"
          onChange={onChange}
          errorMessage="Apellido no debe estar vacio"
          required
        />
        <InputValidator
          name="email"
          classSpan="col-span-2"
          value={formData.name}
          type="email"
          classname="input__Login"
          placeholder="Email"
          onChange={onChange}
          errorMessage="Debe ser email valido"
          required
        />
        <InputValidator
          name="password"
          value={formData.name}
          type="password"
          classname="input__Login"
          placeholder="password"
          onChange={onChange}
          errorMessage="Minimo 8 caracteres e incluir 1 numero y 1 caracter especial"
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          required
        />
        <InputValidator
          name="confirmPassword"
          value={formData.name}
          type="password"
          classname="input__Login"
          placeholder="Confirm pasword"
          onChange={onChange}
          errorMessage="NO coinciden las claves"
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          required
        />
      </div>
      <div className="form__footer">
        <button
          type="button"
          className="form__link"
          onClick={() => dispatch(showLoginForm())}
        >
          Login si tienes cuenta
        </button>
        <ButtonAction
          className="btn-action--form"
          content="Next"
          type="submit"
          handleClick={handleSubmit}
        />
      </div>
    </form>
  );
}

export default Register;
