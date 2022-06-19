import axios from 'axios';
import { hiddeLoginForm, hiddeRegisterForm } from './Modals.reducer';

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_ERROR = 'AUTH_ERROR';
const LOGOUT = 'LOGOUT';
const USER_SUCCESS = 'USER_SUCCESS';
const url = process.env.REACT_APP_BACKEND_URI;

const initialState = {
  isAuth: false,
  user: {},
  error: null,
};

export const authUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}user/signin`, {
        email,
        password,
      });
      const { token, message, ...user } = response.data;
      localStorage.setItem('token', token);
      dispatch(hiddeLoginForm());

      dispatch({ type: AUTH_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error });
    }
  };
};

export const register = (body) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}user/signup`, body);
      const { token, message, ...user } = response.data;
      localStorage.setItem('token', token);
      dispatch(hiddeRegisterForm());
      dispatch({ type: AUTH_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error });
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT });
  };
};

export const getUerData = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}user/profile`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      dispatch({ type: USER_SUCCESS, payload: response.data.user });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response });
    }
  };
};

export const getLikeData = ({ videoId }) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${url}video/${videoId}/new-like`,
        {},
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );

      dispatch({ type: USER_SUCCESS, payload: response.data.user });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response });
    }
  };
};

export const getLikeDatarest = ({ videoId }) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(
        `${url}video/${videoId}/remove-like`,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );

      dispatch({ type: USER_SUCCESS, payload: response.data.user });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response });
    }
  };
};

export const putNewPasswordData = ({
  password,
  newpassword,
  confirmPassword,
}) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `${url}user/changepassword`,
        { password, newpassword, confirmPassword },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
      dispatch({ type: USER_SUCCESS, payload: response.data.user });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response });
    }
  };
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
