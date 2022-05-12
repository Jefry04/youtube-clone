import React from 'react';
import MobileFooterItem from './MobileFooterItem';
import HomeIcon from './icons/HomeIcon';
import ShortsIcon from './icons/ShortsIcon';
import SubscriptionsIcon from './icons/SubscriptionsIcon';
import LibraryIcon from './icons/LibraryIcon';

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
