import {
  SHOW_CHANGE_PASSWORD_FORM,
  HIDDE_CHANGE_PASSWORD_FORM,
} from './ChangePassword.actions';

const initialState = {
  showingChangePasswordForm: false,
};

function ChangePasswordReducer(state = initialState, action = null) {
  switch (action.type) {
    case SHOW_CHANGE_PASSWORD_FORM:
      return {
        ...state,
        showingChangePasswordForm: !state.showForm,
      };
    case HIDDE_CHANGE_PASSWORD_FORM:
      return {
        ...state,
        showingChangePasswordForm: false,
      };
    default:
      return state;
  }
}

export default ChangePasswordReducer;
