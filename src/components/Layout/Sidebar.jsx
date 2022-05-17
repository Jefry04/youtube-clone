/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import '../../styles/components/Layout/Sidebar.scss';
import SidebarSection from './SidebarSection';
import SidebarTab from './SidebarTab';
import Buttonaction from '../ButtonAction';

import HomeIcon from '../../assets/icons/HomeIcon';
import ExplorerIcon from '../../assets/icons/ExplorerIcon';
import ShortsIcon from '../../assets/icons/ShortsIcon';
import SubscriptionsIcon from '../../assets/icons/SubscriptionsIcon';
import LibraryIcon from '../../assets/icons/LibraryIcon';
import HistoryIcon from '../../assets/icons/HistoryIcon';
import PremiumIcon from '../../assets/icons/PremiumIcon';
import LiveIcon from '../../assets/icons/LiveIcon';
import CogIcon from '../../assets/icons/CogIcon';
import FlagIcon from '../../assets/icons/FlagIcon';
import HelpIcon from '../../assets/icons/HelpIcon';
import AlertMessageIcon from '../../assets/icons/AlertMessageIcon';
import UserIcon from '../../assets/icons/UserIcon';

function Sidebar() {
  return (
    <div className="sidebar">
      <aside className="sidebar__content">
        {/* <!-- Explorer Area --> */}
        <SidebarSection>
          <SidebarTab Icon={HomeIcon} content="Principal" isActive />
          <SidebarTab Icon={ExplorerIcon} content="Explorar" />
          <SidebarTab Icon={ShortsIcon} content="Shorts" />
          <SidebarTab Icon={SubscriptionsIcon} content="Subscripciones" />
        </SidebarSection>

        <div className="sidebar__divider" />

        {/* <!-- Library --> */}
        <SidebarSection>
          <SidebarTab Icon={LibraryIcon} content="Biblioteca" />
          <SidebarTab Icon={HistoryIcon} content="Historial" />
        </SidebarSection>

        <div className="sidebar__divider" />

        {/* <!-- Connection --> */}
        <SidebarSection description='Connectez-vous à YouTube pour cliquer sur "J&apos;aime", ajouter un commentaire et vous abonner.'>
          <div className="sidebar__actions">
            <Buttonaction
              className="btn-action--login"
              content="REGISTRARSE"
              prependIcon={<UserIcon />}
            />
          </div>
        </SidebarSection>

        <div className="sidebar__divider" />

        {/* <!-- Categories --> */}
        <SidebarSection title="Lo mejor de YouTube">
          <SidebarTab
            imgUrl={require('../../assets/images/icons/music.jpg')}
            content="Musica"
          />
          <SidebarTab
            imgUrl={require('../../assets/images/icons/sports.jpg')}
            content="Deportes"
          />
          <SidebarTab
            imgUrl={require('../../assets/images/icons/games.jpg')}
            content="Videojuegos"
          />
          <SidebarTab
            imgUrl={require('../../assets/images/icons/lives.jpg')}
            content="En vivo"
          />
          <SidebarTab
            imgUrl={require('../../assets/images/icons/learn.jpg')}
            content="Aprendizaje"
          />
          <SidebarTab
            imgUrl={require(`../../assets/images/icons/panoramic-videos.jpg`)}
            content="Musica"
          />
          <SidebarTab
            imgUrl={require('../../assets/images/icons/music.jpg')}
            content="Video panorámico en 360°"
          />
        </SidebarSection>

        <div className="sidebar__divider" />

        {/* <!-- More of YouTube --> */}
        <SidebarSection title="Mas de youtube">
          <SidebarTab Icon={PremiumIcon} content="Youtube Premium" />
          <SidebarTab Icon={LiveIcon} content="En vivo" />
        </SidebarSection>

        <div className="sidebar__divider" />

        {/* <!-- Settings --> */}
        <SidebarSection>
          <SidebarTab Icon={CogIcon} content="Configuración" />
          <SidebarTab Icon={FlagIcon} content="Historial de denuncias" />
          <SidebarTab Icon={HelpIcon} content="Ayuda" />
          <SidebarTab Icon={AlertMessageIcon} content="Enviar comentarios" />
        </SidebarSection>

        <div className="sidebar__divider" />

        {/* <!-- Links --> */}
        <SidebarSection>
          <div className="sidebar__section__links">
            <a href="#Top" className="sidebar__link">
              Acerca de
            </a>
            <a href="#Top" className="sidebar__link">
              Prensa
            </a>
            <a href="#Top" className="sidebar__link">
              Derechos de autor
            </a>
            <a href="#Top" className="sidebar__link">
              Cominicarte con nosotros
            </a>
            <a href="#Top" className="sidebar__link">
              Creadores
            </a>
            <a href="#Top" className="sidebar__link">
              Anunciar
            </a>
            <a href="#Top" className="sidebar__link">
              Desarrolladores
            </a>
          </div>

          <div className="sidebar__section__links">
            <a href="#Top" className="sidebar__link">
              Condiciones de privacidad
            </a>
            <a href="#Top" className="sidebar__link">
              Politicas y seguridad
            </a>
            <a href="#Top" className="sidebar__link">
              Cómo funciona Youtube
            </a>
            <a href="#Top" className="sidebar__link">
              Prueba funciones nuevas
            </a>
          </div>
        </SidebarSection>

        <footer className="sidebar__footer">© 2022 Google LLC</footer>
      </aside>
    </div>
  );
}

export default Sidebar;
