import React, { useState } from 'react';
import iconoYoutube from '../../images/brand/icon.png';
import letterYoutube from '../../images/brand/letter.png';
import Buttonaction from '../ButtonAction';
import SearchHeader from '../SearchHeader';
import Register from '../../pages/Register';

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
            <Buttonaction nameButton="header__hamburger" svg={<BarsIcon />} />
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
            nameButton="header__search__button"
            svg={<SearchIcon />}
          />
          <Buttonaction nameButton="header__voice" svg={<VoiceIcon />} />
        </div>
        <div className="header__user">
          <Buttonaction nameButton="header__apps" svg={<AppsIcon />} />
          <Buttonaction
            nameButton="header__options"
            svg={<VerticalDotsIcon />}
          />
          <Buttonaction
            nameButton="header__conect"
            wordkey="REGISTRARSE"
            svg={<UserIcon />}
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
