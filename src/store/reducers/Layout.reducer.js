import axios from 'axios';

const ACTIONS = {
  SIDEBAR__TOGGLE: 'SIDEBAR__TOGLE',
};
const GET_LABELS_NAME = 'GET_LABELS_NAME';
const GET_LABELS_ERROR = 'GET_LABELS_ERROR';
const url = process.env.REACT_APP_BACKEND_URI;

const initialState = {
  showSidebar: true,
  labels: [],
  error: null,
};

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

export const sidebarToggle = (payload) =>
  actionBody(ACTIONS.SIDEBAR__TOGGLE, payload);

function LayoutReducer(state = initialState, action = null) {
  if (action.type === ACTIONS.SIDEBAR__TOGGLE) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === GET_LABELS_NAME) {
    return {
      ...state,
      labels: action.payload,
      error: null,
    };
  }
  if (action.type === GET_LABELS_ERROR) {
    return {
      ...state,
      labels: null,
      error: action.payload,
    };
  }
  return state;
}

export default LayoutReducer;
