const ACTIONS = {
  SIDEBAR__TOGGLE: 'SIDEBAR__TOGLE',
};

const actionBody = (type, payload) => ({ type, payload });

export const sidebarToggle = (payload) =>
  actionBody(ACTIONS.SIDEBAR__TOGGLE, payload);

const initialState = {
  showSidebar: true,
};

function LayoutReducer(state = initialState, action = null) {
  if (action.type === ACTIONS.SIDEBAR__TOGGLE) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  return state;
}

export default LayoutReducer;
