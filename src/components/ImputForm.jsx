import React from 'react';

function ImputForm(props) {
  const { forminput, classinput, placeholder, secondforminput } = props;
  return (
    <input
      className={`input__${forminput} ${secondforminput}`}
      type={`${classinput}`}
      placeholder={`${placeholder}`}
    />
  );
}

export default ImputForm;
