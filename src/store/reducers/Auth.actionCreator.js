import axios from 'axios';
import { toast } from 'react-toastify';

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
      toast.info(`Bienvenido ${response.data.user.name}`);

      dispatch({ type: AUTH_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error });
      toast.error(error.response.data.message);
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
      toast.success('Usuario registrado con exito');
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
      localStorage.removeItem('token');
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
      toast.success('Cambio de contraseña con exito');
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response });
      toast.error(error.message, 'error', 5);
    }
  };
};

export const updateUser = (user) => ({ type: USER_SUCCESS, payload: user });
