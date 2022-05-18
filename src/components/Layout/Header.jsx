import React, { useState } from 'react';
import iconoYoutube from '../../images/brand/icon.png';
import letterYoutube from '../../images/brand/letter.png';
import Buttonaction from '../ButtonAction';
import SearchHeader from '../SearchHeader';
import Register from '../Register';

import UserIcon from '../../assets/icons/UserIcon';
import BarsIcon from '../../assets/icons/BarsIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import VoiceIcon from '../../assets/icons/VoiceIcon';
import AppsIcon from '../../assets/icons/AppsIcon';
import VerticalDotsIcon from '../../assets/icons/VerticalDotsIcon';
import PublicModal from '../PublicModal';

function Header() {
  const [openRegisterForm, setOpenRegisterForm] = useState(false);

  const handleRegister = () => {
    setOpenRegisterForm(true);
  };

  const closeRegisterForm = () => {
    setOpenRegisterForm(false);
  };
  return (
    <>
      <nav className="header">
        <div className="header__group">
          <div className="group__hamburger">
            <Buttonaction
              className="btn-action--toggle"
              prependIcon={<BarsIcon />}
            />
          </div>
          <div className="hamburger__logo">
            <img
              src={iconoYoutube}
              alt="icon youtube"
              className="brand__icon"
            />
            <img
              src={letterYoutube}
              alt="letter youtube"
              className="brand__letter"
            />
          </div>
        </div>
        <div className="header__search">
          <SearchHeader />
          <Buttonaction
            className="btn-action--search"
            prependIcon={<SearchIcon />}
          />
          <Buttonaction
            className="btn-action--voice"
            prependIcon={<VoiceIcon />}
          />
        </div>
        <div className="header__user">
          <Buttonaction
            className="btn-action--appsconf"
            prependIcon={<AppsIcon />}
          />
          <Buttonaction
            className="btn-action--appsconf"
            prependIcon={<VerticalDotsIcon />}
          />
          <Buttonaction
            className="btn-action--login"
            content="REGISTRARSE"
            prependIcon={<UserIcon />}
            handleClick={handleRegister}
          />
        </div>
      </nav>
      <PublicModal opened={openRegisterForm} onClose={closeRegisterForm}>
        <Register />
      </PublicModal>
    </>
  );
}

export default Header;
