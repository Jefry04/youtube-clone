import axios from 'axios';
import alertify from 'alertifyjs';

import { hiddeLoginForm, hiddeRegisterForm } from './Modals.actionCreator';
import { AUTH_SUCCESS, AUTH_ERROR, LOGOUT, USER_SUCCESS } from './Auth.actions';

const url = process.env.REACT_APP_BACKEND_URI;

export const authUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/auth/local/login`, {
        email,
        password,
      });
      const { token, message, ...user } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
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
      const response = await axios.post(`${url}/auth/local/signup`, body);

      const { token, message, ...user } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      alertify.notify('Usuario registrado con exito', 'success', 5);
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
    axios.defaults.headers.common.Authorization = '';
    dispatch({ type: LOGOUT });
  };
};

export const getUerData = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/user/profile`, {
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
        `${url}/video/${videoId}/new-like`,
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
        `${url}/video/${videoId}/remove-like`,
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
        `${url}/user/changepassword`,
        { password, newpassword, confirmPassword },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
      dispatch({ type: USER_SUCCESS, payload: response.data.user });
      alertify.notify('Cambio de password con exito', 'success', 5);
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response });
      alertify.notify(error.message, 'error', 5);
    }
  };
};

export const updateUser = (user) => ({ type: USER_SUCCESS, payload: user });
