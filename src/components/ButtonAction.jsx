import React from 'react';
import '../styles/components/Buttonaction.scss';

function ButtonAction(props) {
  const { svg, isSubmit, classname, content, handleClick } = props;

  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`${classname}`}
      onClick={handleClick}
    >
      {svg}
      {content}
    </button>
  );
}

export default ButtonAction;
