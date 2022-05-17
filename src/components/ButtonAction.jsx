import React from 'react';
import '../styles/components/Buttonaction.scss';

function ButtonAction(props) {
  const {
    prependIcon,
    content,
    appendIcon,
    isSubmit,
    className,
    handleClick,
    isDisabled,
  } = props;

  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`btn-action ${className}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {prependIcon && <div className="btn-action__prepend">{prependIcon}</div>}
      <div className="btn-action__content"> {content} </div>
      {appendIcon && <div className="btn-action__append">{appendIcon}</div>}
    </button>
  );
}

export default ButtonAction;
