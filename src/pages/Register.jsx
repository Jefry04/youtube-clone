import React, { useState } from 'react';
import Buttonaction from '../components/ButtonAction';
import ImputForm from '../components/ImputForm';
import PublicModal from '../components/PublicModal';
import Icono from '../images/brand/icon.png';
import Letter from '../images/brand/letter.png';
import Login from './Login';

import '../styles/components/Login.scss';

function Register() {
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const handleLogin = () => {
    setOpenLoginModal(true);
  };

  const closeLoginModal = () => {
    setOpenLoginModal(false);
  };

  return (
    <>
      <main>
        <form>
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
            <button type="button" className="form__link" onClick={handleLogin}>
              Login si tienes cuenta
            </button>
            <Buttonaction className="btn-action--form" wordkey="Next" />
          </div>
        </form>
      </main>
      <PublicModal opened={openLoginModal} onClose={closeLoginModal}>
        <Login />
      </PublicModal>
    </>
  );
}

export default Register;
