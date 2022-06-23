import axios from 'axios';

import {
  GET_LABELS_NAME,
  GET_LABELS_ERROR,
  SIDEBAR__TOGGLE,
} from './Layout.actions';

const url = process.env.REACT_APP_BACKEND_URI;

export const fetchLabels = () => {
  const paramsObject = {
    page: 1,
    limit: 14,
  };
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${url}labels`, {
        params: paramsObject,
      });
      dispatch({ type: GET_LABELS_NAME, payload: data.labels });
    } catch (error) {
      dispatch({ type: GET_LABELS_ERROR, payload: error });
    }
  };
};

const actionBody = (type, payload) => ({ type, payload });

export const sidebarToggle = (payload) => actionBody(SIDEBAR__TOGGLE, payload);
