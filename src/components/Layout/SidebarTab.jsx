import React from 'react';

function SidebarTab(props) {
  const { Icon, content, isActive, imgUrl } = props;

  const className = `sidebar__tab${isActive ? ' active' : ''}`;

  return (
    <div className={className}>
      <a href="#Top" className="sidebar__tab__link">
        {Icon ? (
          <div className="sidebar__tab__icon">
            <Icon />
          </div>
        ) : (
          <figure className="sidebar__tab__icon sidebar__tab__icon--rounded-full">
            <img src={imgUrl} alt={content} className="sidebar__tab__img" />
          </figure>
        )}
        <div className="sidebar__tab__name"> {content} </div>
      </a>
    </div>
  );
}

export default SidebarTab;
