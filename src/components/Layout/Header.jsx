import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sidebarToggle } from '../../store/reducers/Layout.reducer';

import Buttonaction from '../ButtonAction';
import SearchHeader from '../SearchHeader';

import iconYoutube from '../../images/brand/icon.png';
import letterYoutube from '../../images/brand/letter.png';
import BarsIcon from '../../assets/icons/BarsIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import VoiceIcon from '../../assets/icons/VoiceIcon';
import AppsIcon from '../../assets/icons/AppsIcon';
import VerticalDotsIcon from '../../assets/icons/VerticalDotsIcon';
import RegisterButton from '../RegisterButton';
import UserIcon from '../../assets/icons/UserIcon';
import { logout } from '../../store/reducers/Auth.reducer';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.AuthReducer);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="header">
      <div className="header__group">
        <div className="group__hamburger">
          <Buttonaction
            className="btn-action--toggle"
            prependIcon={<BarsIcon />}
            handleClick={() => dispatch(sidebarToggle())}
          />
        </div>
        <div className="hamburger__logo">
          <img src={iconYoutube} alt="icon youtube" className="brand__icon" />
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
        {isAuth ? (
          <Buttonaction
            className="btn-action--login"
            content="LOGOUT"
            prependIcon={<UserIcon />}
            handleClick={handleLogout}
          />
        ) : (
          <RegisterButton />
        )}
      </div>
    </nav>
  );
}

export default Header;
