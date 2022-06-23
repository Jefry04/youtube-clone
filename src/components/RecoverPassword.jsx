import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Buttonaction from './ButtonAction';
import InputValidator from './InputValidator';
import Icon from '../assets/images/brand/icon.png';
import Letter from '../assets/images/brand/letter.png';
import '../styles/components/RecoverPassword.scss';

function RecoverPassword() {
  const { token } = useParams();
  const url = process.env.REACT_APP_BACKEND_URI;
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.put(
      `${url}user/recover-password`,
      {
        email: formData.email,
        password: formData.newpassword,
        confirmPassword: formData.confirmPassword,
      },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    if (response.status === 201) {
      navigate('/');
    }
  };

  return (
    <div className="container">
      <form>
        <header>
          <div className="form__header">
            <img src={Icon} alt="logoYoutube" className="brand__icon" />
            <img src={Letter} alt="letterYoutube" className="brand__letter" />
          </div>
          <p className="form__subtitle"> Change Password </p>
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
          <InputValidator
            name="newpassword"
            value={formData.name}
            type="password"
            classname="input__Login --span"
            placeholder="Password"
            onChange={onChange}
            errorMessage="Minimo 8 caracteres e incluir 1 numero y 1 caracter especial"
            pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
            required
          />
          <InputValidator
            name="confirmPassword"
            value={formData.name}
            type="password"
            classname="input__Login --span"
            placeholder="Confirm pasword"
            onChange={onChange}
            errorMessage="NO coinciden las claves"
            pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
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
    </div>
  );
}

export default RecoverPassword;
