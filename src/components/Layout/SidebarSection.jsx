import React from 'react';
import SidebarTab from './SidebarTab';

const SidebarSection = (props) => {
  const { title, description, children, tabs } = props;

  return (
    <section className="sidebar__section">
      {(title || description) && (
        <header className="sidebar__section__header">
          {title && <h2 className="sidebar__section__title"> {title} </h2>}
          {description && (
            <p className="sidebar__section__description"> {description} </p>
          )}
        </header>
      )}

      <div className="sidebar__section__body">
        {tabs &&
          tabs.length &&
          tabs.map((tab) => {
            return (
              <SidebarTab
                key={tab.id}
                Icon={tab.icon}
                content={tab.name}
                isActive={tab.isActive}
                path={tab.path}
              />
            );
          })}
        {children}
      </div>
    </section>
  );
};

export default SidebarSection;
