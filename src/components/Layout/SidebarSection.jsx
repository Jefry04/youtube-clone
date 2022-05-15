import React from 'react';

const SidebarSection = (props) => {
  const { title, description, children } = props;

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

      <div className="sidebar__section__body">{children}</div>
    </section>
  );
};

export default SidebarSection;
