import {
  HIDDE_REGISTER_FORM,
  SHOW_REGISTER_FORM,
  SHOW_LOGIN_FORM,
  HIDDE_LOGIN_FORM,
  SHOW_FORM,
  SHOW_RECOVER_PASSWORD,
  HIDDE_RECOVER_PASSWORD,
} from './Modals.actions';

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
        showingLoginForm: false,
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
