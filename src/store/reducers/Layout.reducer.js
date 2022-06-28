import {
  GET_LABELS_NAME,
  GET_LABELS_ERROR,
  SIDEBAR__TOGGLE,
} from './Layout.actions';

const initialState = {
  showSidebar: true,
  labels: [],
  error: null,
};

function LayoutReducer(state = initialState, action = null) {
  if (action.type === SIDEBAR__TOGGLE) {
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
