import React from 'react';
import '../styles/components/Buttonaction.scss';

function ButtonAction(props) {
  const { svg, nameButton, wordkey, handleClick } = props;

  return (
    <button type="button" className={`${nameButton}`} onClick={handleClick}>
      {svg}
      {wordkey}
    </button>
  );
}

export default ButtonAction;
