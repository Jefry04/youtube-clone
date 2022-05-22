import React from 'react';
import { useDispatch } from 'react-redux';
import { sidebarToggle } from '../../store/reducers/Layout.reducer';

//  COMPONENTS
import Buttonaction from '../ButtonAction';
import SearchHeader from '../SearchHeader';
/* import Register from '../Register';
import PublicModal from '../PublicModal'; */

//  ICONS
import iconYoutube from '../../images/brand/icon.png';
import letterYoutube from '../../images/brand/letter.png';
/* import UserIcon from '../../assets/icons/UserIcon'; */
import BarsIcon from '../../assets/icons/BarsIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import VoiceIcon from '../../assets/icons/VoiceIcon';
import AppsIcon from '../../assets/icons/AppsIcon';
import VerticalDotsIcon from '../../assets/icons/VerticalDotsIcon';
import RegisterButton from '../RegisterButton';

function Header() {
  const dispatch = useDispatch();

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
        <RegisterButton />
      </div>
    </nav>
  );
}

export default Header;
