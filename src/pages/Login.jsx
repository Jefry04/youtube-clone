import React from 'react';
import Buttonaction from '../components/ButtonAction';
import ImputForm from '../components/ImputForm';
import Icono from '../images/brand/icon.png';
import Letter from '../images/brand/letter.png';
import '../styles/components/Login.scss';

function Login() {
  return (
    <main>
      <form>
        <header>
          <div className="form__header">
            <img src={Icono} alt="logoYoutube" className="brand__icon" />
            <img src={Letter} alt="letterYoutube" className="brand__letter" />
          </div>
          <p className="form__subtitle"> Login </p>
        </header>
        <div className="form__content">
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
            secondforminput="--span"
          />
        </div>
        <div className="form__footer">
          <a href=";" className="form__link">
            Olvidaste la contraseña
          </a>
          <Buttonaction nameButton="form__login" wordkey="Next" />
        </div>
      </form>
    </main>
  );
}

export default Login;
