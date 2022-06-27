import { AUTH_SUCCESS, AUTH_ERROR, LOGOUT, USER_SUCCESS } from './Auth.actions';

const initialState = {
  isAuth: false,
  user: {},
  error: null,
};

function AuthReducer(state = initialState, action = null) {
  if (action.type === AUTH_SUCCESS) {
    return {
      ...state,
      isAuth: true,
      error: null,
      user: action.payload.user,
    };
  }
  if (action.type === AUTH_ERROR) {
    return {
      ...state,
      error: action.payload,
    };
  }
  if (action.type === USER_SUCCESS) {
    return {
      ...state,
      isAuth: true,
      user: action.payload,
    };
  }
  if (action.type === LOGOUT) {
    return {
      ...state,
      isAuth: false,
      user: null,
    };
  }
  return state;
}

export default AuthReducer;
