import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showLoginForm } from '../store/reducers/Modals.actionCreator';
import ButtonAction from './ButtonAction';
import InputValidator from './InputValidator';

import Icon from '../assets/images/brand/icon.png';
import Letter from '../assets/images/brand/letter.png';
import '../styles/components/Register.scss';
import { register } from '../store/reducers/Auth.actionCreator';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(register(formData));
    navigate('/');
  };

  return (
    <form className="register">
      <header className="register__header">
        <div className="register__brand">
          <img src={Icon} alt="logoYoutube" className="register__brand__icon" />
          <img
            src={Letter}
            alt="letterYoutube"
            className="register__brand__letter"
          />
        </div>
        <p className="register__title"> Crea tu cuenta </p>
      </header>
      <div className="register__content">
        <InputValidator
          name="firstName"
          value={formData.name}
          type="text"
          classname="register__input"
          placeholder="Nombres"
          onChange={onChange}
          errorMessage="Nombre no debe estar vacio"
          required
        />
        <InputValidator
          name="lastName"
          value={formData.name}
          type="text"
          classname="register__input"
          placeholder="Apellidos"
          onChange={onChange}
          errorMessage="Apellido no debe estar vacio"
          required
        />
        <div className="register__input--span">
          <InputValidator
            name="email"
            value={formData.name}
            type="email"
            classname="register__input"
            placeholder="Email"
            onChange={onChange}
            errorMessage="Debe ser email valido"
            required
          />
        </div>
        <InputValidator
          name="password"
          value={formData.name}
          type="password"
          classname="register__input"
          placeholder="Contraseña"
          onChange={onChange}
          errorMessage="Minimo 8 caracteres e incluir 1 numero y 1 caracter especial"
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          required
        />
        <InputValidator
          name="confirmPassword"
          value={formData.name}
          type="password"
          classname="register__input"
          placeholder="Confirmar contraseña"
          onChange={onChange}
          errorMessage="NO coinciden las claves"
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          required
        />
      </div>
      <div className="register__footer">
        <button
          type="button"
          className="register__link"
          onClick={() => dispatch(showLoginForm())}
        >
          ¿Ya estas registrado?
        </button>
        <ButtonAction
          className="btn-action--form"
          content="Registrarse"
          type="submit"
          handleClick={handleSubmit}
        />
      </div>
    </form>
  );
}

export default Register;
