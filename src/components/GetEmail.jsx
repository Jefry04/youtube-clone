import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import alertify from 'alertifyjs';
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
      alertify.notify('Correo enviado con exito', 'success', 5);
    }
    navigate('/');
  };

  if (loading) {
    return (
      <div className="loading">
        <Loader color="red" size={100} />
        <h2>Sending email...</h2>
      </div>
    );
  }

  return (
    <form>
      <header>
        <div className="form__header">
          <img src={Icon} alt="logoYoutube" className="brand__icon" />
          <img src={Letter} alt="letterYoutube" className="brand__letter" />
        </div>
        <p className="form__subtitle"> Recover Password </p>
      </header>
      <div className="form__content_change">
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
      </div>
      <div className="form__footer">
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

export default GetEmail;
