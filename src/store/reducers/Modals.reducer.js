const SHOW_REGISTER_FORM = 'SHOW_REGISTER_FORM';
const HIDDE_REGISTER_FORM = 'HIDDE_REGISTER_FORM';
const SHOW_LOGIN_FORM = 'SHOW_LOGIN_FORM';
const HIDDE_LOGIN_FORM = 'HIDDE_LOGIN_FORM';
const SHOW_FORM = 'SHOW_FORM';
const SHOW_RECOVER_PASSWORD = 'SHOW_RECOVER_PASSWORD';
const HIDDE_RECOVER_PASSWORD = 'HIDDE_RECOVER_PASSWORD';

const actionBody = (type, payload = null) => ({ type, payload });

export const showRegisterForm = () => actionBody(SHOW_REGISTER_FORM);
export const hiddeRegisterForm = () => actionBody(HIDDE_REGISTER_FORM);
export const showLoginForm = () => actionBody(SHOW_LOGIN_FORM);
export const hiddeLoginForm = () => actionBody(HIDDE_LOGIN_FORM);
export const showFormAction = () => actionBody(SHOW_FORM);
export const showRecoverPassword = () => actionBody(SHOW_RECOVER_PASSWORD);
export const hiddeRecoverPassword = () => actionBody(HIDDE_RECOVER_PASSWORD);

const initialState = {
  showingRegisterForm: false,
  showingLoginForm: false,
  showForm: false,
  showRecoverPassword: false,
};

function ModalsReducer(state = initialState, action = null) {
  switch (action.type) {
    case SHOW_REGISTER_FORM:
      return {
        ...state,
        showingRegisterForm: true,
        showLoginForm: false,
        showRecoverPassword: false,
      };
    case HIDDE_REGISTER_FORM:
      return {
        ...state,
        showingRegisterForm: false,
      };
    case SHOW_LOGIN_FORM:
      return {
        ...state,
        showingLoginForm: true,
        showingRegisterForm: false,
        showRecoverPassword: false,
      };
    case SHOW_FORM:
      return {
        ...state,
        showForm: !state.showForm,
      };
    case HIDDE_LOGIN_FORM:
      return {
        ...state,
        showingLoginForm: false,
      };
    case SHOW_RECOVER_PASSWORD:
      return {
        ...state,
        showRecoverPassword: true,
        showingLoginForm: false,
        showingRegisterForm: false,
      };
    case HIDDE_RECOVER_PASSWORD:
      return {
        ...state,
        showRecoverPassword: false,
      };
    default:
      return state;
  }
}

export default ModalsReducer;
