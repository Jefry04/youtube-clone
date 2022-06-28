import {
  HIDDE_REGISTER_FORM,
  SHOW_REGISTER_FORM,
  SHOW_LOGIN_FORM,
  HIDDE_LOGIN_FORM,
  SHOW_FORM,
  SHOW_RECOVER_PASSWORD,
  HIDDE_RECOVER_PASSWORD,
} from './Modals.actions';

const actionBody = (type, payload = null) => ({ type, payload });

export const showRegisterForm = () => actionBody(SHOW_REGISTER_FORM);
export const hiddeRegisterForm = () => actionBody(HIDDE_REGISTER_FORM);
export const showLoginForm = () => actionBody(SHOW_LOGIN_FORM);
export const hiddeLoginForm = () => actionBody(HIDDE_LOGIN_FORM);
export const showFormAction = () => actionBody(SHOW_FORM);
export const showRecoverPassword = () => actionBody(SHOW_RECOVER_PASSWORD);
export const hiddeRecoverPassword = () => actionBody(HIDDE_RECOVER_PASSWORD);
