import React from 'react';
import '../styles/components/MobileFooterItem.scss';

const MobileFooterItem = (props) => {
  const { Icon, content } = props;

  return (
    <div className="mobile-footer__item">
      <div className="mobile-footer__item__icon">
        <Icon />
      </div>
      <span className="mobile-footer__item__content"> {content} </span>
    </div>
  );
};

export default MobileFooterItem;
