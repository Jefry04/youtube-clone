import React from 'react';
import Buttonaction from '../components/Buttonaction';
import ImputForm from '../components/ImputForm';
import Icono from '../images/brand/icon.png';
import Letter from '../images/brand/letter.png';
import '../styles/components/Login.scss';

function Register() {
  return (
    <main className="register__container">
      <form className="form">
        <header>
          <div className="form__header">
            <img src={Icono} alt="logoYoutube" className="brand__icon" />
            <img src={Letter} alt="letterYoutube" className="brand__letter" />
          </div>
          <p className="form__subtitle"> Crea tu cuenta </p>
        </header>
        <div className="form__content">
          <ImputForm
            classinput="text"
            forminput="Login"
            placeholder="First name"
          />
          <ImputForm
            classinput="text"
            forminput="Login"
            placeholder="Last name"
          />
          <ImputForm
            classinput="email"
            forminput="Login"
            placeholder="email"
            secondforminput="--span"
          />
          <ImputForm
            classinput="password"
            forminput="Login"
            placeholder="password"
          />
          <ImputForm
            classinput="password"
            forminput="Login"
            placeholder="Confirm pasword"
          />
        </div>
        <div className="form__footer">
          <a href=";" className="form__link">
            Login si tienes cuenta
          </a>
          <Buttonaction nameButton="form__login" wordkey="Next" />
        </div>
      </form>
    </main>
  );
}

export default Register;
