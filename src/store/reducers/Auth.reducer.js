const SHOW_REGISTER_FORM = 'SHOW_REGISTER_FORM';
const HIDDE_REGISTER_FORM = 'HIDDE_REGISTER_FORM';
const SHOW_LOGIN_FORM = 'SHOW_LOGIN_FORM';
const HIDDE_LOGIN_FORM = 'HIDDE_LOGIN_FORM';

const actionBody = (type, payload = null) => ({ type, payload });

export const showRegisterForm = () => actionBody(SHOW_REGISTER_FORM);
export const hiddeRegisterForm = () => actionBody(HIDDE_REGISTER_FORM);
export const showLoginForm = () => actionBody(SHOW_LOGIN_FORM);
export const hiddeLoginForm = () => actionBody(HIDDE_LOGIN_FORM);

const initialState = {
  showingRegisterForm: false,
  showingLoginForm: false,
};
function AuthReducer(state = initialState, action = null) {
  switch (action.type) {
    case SHOW_REGISTER_FORM:
      return {
        ...state,
        showingRegisterForm: true,
        showLoginForm: false,
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
      };
    case HIDDE_LOGIN_FORM:
      return {
        ...state,
        showingLoginForm: false,
      };
    default:
      return state;
  }
}

export default AuthReducer;
