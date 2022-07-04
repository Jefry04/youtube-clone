import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/components/Layout/Header.scss';

import { Menu, Divider } from '@mantine/core';
import { User, UserCircle, Login, Logout, Home } from 'tabler-icons-react';
import ButtonAction from '../ButtonAction';
import SearchHeader from '../SearchHeader';

import {
  showLoginForm,
  showRegisterForm,
} from '../../store/reducers/Modals.actionCreator';
import { sidebarToggle } from '../../store/reducers/Layout.actionCreator';
import { logout } from '../../store/reducers/Auth.actionCreator';

import iconYoutube from '../../assets/images/brand/icon.png';
import letterYoutube from '../../assets/images/brand/letter.png';
import BarsIcon from '../../assets/icons/BarsIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import VoiceIcon from '../../assets/icons/VoiceIcon';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, user } = useSelector((state) => state.AuthReducer);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const avatar = (
    <div className="header__avatar">
      <figure className="header__avatar__fig">
        {isAuth && (
          <img
            src={user.avatar}
            alt={user.fullName}
            className="header__avatar__img"
          />
        )}
        {!isAuth && <UserCircle size={40} strokeWidth={1} color="#065fd4" />}
      </figure>
    </div>
  );

  return (
    <nav className="header">
      <div className="header__group">
        <div className="group__hamburger">
          <ButtonAction
            className="btn-action--toggle"
            prependIcon={<BarsIcon />}
            handleClick={() => dispatch(sidebarToggle())}
          />
        </div>
        <Link to="/">
          <div className="hamburger__logo">
            <img src={iconYoutube} alt="icon youtube" className="brand__icon" />
            <img
              src={letterYoutube}
              alt="letter youtube"
              className="brand__letter"
            />
          </div>
        </Link>
      </div>
      <div className="header__search">
        <SearchHeader />
        <ButtonAction
          className="btn-action--search"
          prependIcon={<SearchIcon />}
        />
        <ButtonAction
          className="btn-action--voice"
          prependIcon={<VoiceIcon />}
        />
      </div>
      <div className="header__user" data-cy="profile-icon">
        <Menu control={avatar}>
          <Menu.Label>App</Menu.Label>
          <Link to="/" className="header__link">
            <Menu.Item icon={<Home size={14} />}>Home</Menu.Item>
          </Link>
          {isAuth && (
            <Link to="/profile" className="header__link">
              <Menu.Item icon={<User size={14} />}>Ir a perfil</Menu.Item>
            </Link>
          )}
          <Divider />

          {!isAuth && (
            <>
              <Menu.Item
                data-cy="iniciar-sesion"
                icon={<Login size={14} />}
                onClick={() => dispatch(showLoginForm())}
              >
                Iniciar Sesión
              </Menu.Item>
              <Menu.Item
                icon={<User size={14} />}
                onClick={() => dispatch(showRegisterForm())}
              >
                Registrarse
              </Menu.Item>
            </>
          )}
          {isAuth && (
            <Menu.Item icon={<Logout size={14} />} onClick={handleLogout}>
              Cerrar Sesión
            </Menu.Item>
          )}
        </Menu>
      </div>
    </nav>
  );
}

export default Header;
