import {
  SHOW_CHANGE_PASSWORD_FORM,
  HIDDE_CHANGE_PASSWORD_FORM,
} from './ChangePassword.actions';

const actionBody = (type, payload = null) => ({ type, payload });

export const showChangePasswordForm = () =>
  actionBody(SHOW_CHANGE_PASSWORD_FORM);
export const hiddeChangePasswordForm = () =>
  actionBody(HIDDE_CHANGE_PASSWORD_FORM);
