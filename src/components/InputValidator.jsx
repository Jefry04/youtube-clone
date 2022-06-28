/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function InputValidator({
  classname,
  type,
  placeholder,
  onChange,
  name,
  errorMessage,
  pattern,
  required,
  value,
  id,
  classSpan,
}) {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className={`form__group ${classSpan}`}>
      <label htmlFor="control" className="form__label" />
      <input
        name={name}
        id={id}
        value={value}
        className={classname}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        errormessage={errorMessage}
        pattern={pattern}
        required={required}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="input_error">{errorMessage}</span>
    </div>
  );
}

export default InputValidator;
