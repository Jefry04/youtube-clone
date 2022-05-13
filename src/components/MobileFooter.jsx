import React from 'react';
import MobileFooterItem from './MobileFooterItem';
import HomeIcon from '../assets/icons/HomeIcon';
import ShortsIcon from '../assets/icons/ShortsIcon';
import SubscriptionsIcon from '../assets/icons/SubscriptionsIcon';
import LibraryIcon from '../assets/icons/LibraryIcon';
import '../styles/components/MobileFooter.scss';

function MobileFooter() {
  return (
    <footer className="fixed z-fixed mobile-footer">
      <MobileFooterItem Icon={HomeIcon} content="Inicio" />
      <MobileFooterItem Icon={ShortsIcon} content="Shorts" />
      <MobileFooterItem Icon={SubscriptionsIcon} content="Subscripciones" />
      <MobileFooterItem Icon={LibraryIcon} content="Biblioteca" />
    </footer>
  );
}

export default MobileFooter;
