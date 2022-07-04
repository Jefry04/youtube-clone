import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Loader } from '@mantine/core';

import Buttonaction from './ButtonAction';
import InputValidator from './InputValidator';
import Icon from '../assets/images/brand/icon.png';
import Letter from '../assets/images/brand/letter.png';
import '../styles/components/Login.scss';
import { hiddeRecoverPassword } from '../store/reducers/Modals.actionCreator';

function GetEmail() {
  const [loading, setloading] = useState(false);
  const url = process.env.REACT_APP_BACKEND_URI;
  const [formData, setFormData] = useState({
    email: '',
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
    setloading(true);
    const { email } = formData;
    const response = await axios.post(`${url}/user/getemail`, { email });
    if (response.status === 201) {
      dispatch(hiddeRecoverPassword());
      toast.success('Correo enviado con exito');
    }
    navigate('/');
  };

  if (loading) {
    return (
      <div className="loading">
        <Loader color="red" size={100} />
        <h2>Enviando correo...</h2>
      </div>
    );
  }

  return (
    <form>
      <header className="login__header">
        <div className="login__brand">
          <img src={Icon} alt="logoYoutube" className="login__brand__icon" />
          <img
            src={Letter}
            alt="letterYoutube"
            className="login__brand__letter"
          />
        </div>

        <h3 className="login__title"> Recuperar Contraseña </h3>
      </header>
      <div className="register__content">
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
      </div>
      <div className="login__footer">
        <Buttonaction
          className="btn-action--form login__footer--span"
          content="Enviar Correo"
          type="submit"
          handleClick={handleSubmit}
        />
      </div>
    </form>
  );
}

export default GetEmail;
