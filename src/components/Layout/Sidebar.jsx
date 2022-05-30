import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import '../../styles/components/Layout/Sidebar.scss';
import SidebarSection from './SidebarSection';
import SidebarTab from './SidebarTab';
import RegisterButton from '../RegisterButton';

function Sidebar() {
  const { showSidebar, sidebarTabs } = useSelector(
    ({ LayoutReducer }) => LayoutReducer
  );

  const {
    explorerTabs,
    libraryTabs,
    categoryTabs,
    moreTabs,
    settingTabs,
    links,
  } = sidebarTabs;

  const className = `sidebar ${showSidebar ? 'show' : 'hidden'}`;

  return (
    <div className={className}>
      <aside className="sidebar__content">
        <SidebarSection tabs={explorerTabs} />
        <div className="sidebar__divider" />

        <SidebarSection tabs={libraryTabs} />
        <div className="sidebar__divider" />

        <SidebarSection description='Connectez-vous à YouTube pour cliquer sur "J&apos;aime", ajouter un commentaire et vous abonner.'>
          <div className="sidebar__actions">
            <RegisterButton />
          </div>
        </SidebarSection>
        <div className="sidebar__divider" />

        {/* <!-- Categories --> */}
        <SidebarSection title="Lo mejor de YouTube">
          {categoryTabs.map((tab) => {
            return (
              <SidebarTab
                key={tab.id}
                imgUrl={tab.icon}
                content={tab.name}
                isActive={tab.isActive}
                path={tab.path}
              />
            );
          })}
        </SidebarSection>
        <div className="sidebar__divider" />

        {/* <!-- More of YouTube --> */}
        <SidebarSection title="Mas de youtube" tabs={moreTabs} />
        <div className="sidebar__divider" />

        {/* <!-- Settings --> */}
        <SidebarSection tabs={settingTabs} />
        <div className="sidebar__divider" />

        {/* <!-- Links --> */}
        <SidebarSection>
          <div className="sidebar__section__links">
            {links.firstSet.map((link) => {
              return (
                <Link to={link.path} className="sidebar__link" key={link.id}>
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="sidebar__section__links">
            {links.secondSet.map((link) => {
              return (
                <Link to={link.path} className="sidebar__link" key={link.id}>
                  {link.name}
                </Link>
              );
            })}
          </div>
        </SidebarSection>

        <footer className="sidebar__footer">© 2022 Google LLC</footer>
      </aside>
    </div>
  );
}

export default Sidebar;
