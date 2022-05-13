import React from 'react';
import '../styles/components/Buttonaction.scss';

function Buttonaction(props) {
  const { svg, nameButton, wordkey } = props;

  return (
    <button type="button" className={`${nameButton}`}>
      {svg}
      {wordkey}
    </button>
  );
}

export default Buttonaction;
