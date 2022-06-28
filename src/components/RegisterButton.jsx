import React from 'react';
import { useDispatch } from 'react-redux';
import { showRegisterForm } from '../store/reducers/Modals.actionCreator';

import ButtonAction from './ButtonAction';
import UserIcon from '../assets/icons/UserIcon';

const RegisterButton = () => {
  const dispatch = useDispatch();

  return (
    <ButtonAction
      className="btn-action--login"
      content="REGISTRARSE"
      prependIcon={<UserIcon />}
      handleClick={() => dispatch(showRegisterForm())}
    />
  );
};

export default RegisterButton;
