/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import '../../styles/components/Layout/Sidebar.scss';
import SidebarSection from './SidebarSection';
import SidebarTab from './SidebarTab';

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
            <button className="connection-btn" type="button">
              <div className="connection-btn__icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 1C14.96 1 19 5.04 19 10C19 11.42 18.66 12.76 18.07 13.96C16.54 12.24 14.09 11.07 10.69 10.93C12.57 10.6 14 8.97 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 8.97 7.43 10.6 9.31 10.93C5.91 11.07 3.46 12.24 1.93 13.96C1.34 12.76 1 11.42 1 10C1 5.04 5.04 1 10 1ZM7 7C7 5.35 8.35 4 10 4C11.65 4 13 5.35 13 7C13 8.65 11.65 10 10 10C8.35 10 7 8.65 7 7ZM10 19C6.84 19 4.06 17.36 2.45 14.88C4.01 12.93 6.61 11.9 10 11.9C13.39 11.9 15.99 12.93 17.55 14.88C15.94 17.36 13.16 19 10 19Z"
                    fill="#065FD4"
                  />
                </svg>
              </div>
              <div className="connection-btn__content">ACCEDER</div>
            </button>
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
