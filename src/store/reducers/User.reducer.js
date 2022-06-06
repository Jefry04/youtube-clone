import axios from 'axios';

const USER_SUCCESS = 'USER_SUCCESS';
const USER_ERROR = 'USER_ERROR';

const initialState = {
  user: {},
  error: null,
};
const url = process.env.REACT_APP_BACKEND_URI;

export const getUerData = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}users/profile`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      dispatch({ type: USER_SUCCESS, payload: response.data.user });
    } catch (err) {
      dispatch({ type: USER_ERROR, payload: err.response });
    }
  };
};

const UserReducer = (state = initialState, action = null) => {
  if (action.type === USER_SUCCESS) {
    return {
      ...state,
      user: action.payload,
    };
  }
  if (action.type === USER_ERROR) {
    return {
      ...state,
      error: action.payload,
    };
  }
  return state;
};

export default UserReducer;
