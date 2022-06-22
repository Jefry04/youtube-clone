import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Buttonaction from './ButtonAction';
import InputValidator from './InputValidator';
import Icon from '../assets/images/brand/icon.png';
import Letter from '../assets/images/brand/letter.png';
import '../styles/components/Login.scss';
import { putNewPasswordData } from '../store/reducers/Auth.reducer';
import { hiddeChangePasswordForm } from '../store/reducers/ChangePassword.reducer';

function ChangePassword() {
  const [formData, setFormData] = useState({
    password: '',
    newpassword: '',
    confirmPassword: '',
  });
  const dispatch = useDispatch();

  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(
      putNewPasswordData({
        password: formData.password,
        newpassword: formData.newpassword,
        confirmPassword: formData.confirmPassword,
      })
    );
    dispatch(hiddeChangePasswordForm());
  };

  return (
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
          name="password"
          type="password"
          value={formData.name}
          onChange={onChange}
          classname="input__Login --span"
          placeholder="Password"
          errorMessage="Minimo 8 caracteres e incluir 1 numero y 1 caracter especial"
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          required
        />
        <InputValidator
          name="newpassword"
          value={formData.name}
          type="password"
          classname="input__Login --span"
          placeholder="New password"
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
  );
}

export default ChangePassword;
