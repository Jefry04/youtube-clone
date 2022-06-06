const AUTH_SUCCESS = 'AUTH_SUCCESS';

const initialState = {
  isAuth: false,
  user: {},
};

// verify if user is login
export const userIsAuth = () => async (dispatch) => {
  if (localStorage.getItem('userData')) {
    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        isAuth: true,
        user: JSON.parse(localStorage.getItem('userData')),
      },
    });
  }
};

function AuthReducer(state = initialState, action = null) {
  if (action.type === AUTH_SUCCESS) {
    return {
      ...state,
      isAuth: action.payload.isAuth,
      user: action.payload.user,
    };
  }
  return state;
}

export default AuthReducer;
