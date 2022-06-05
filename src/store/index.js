import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer, { userIsAuth } from './reducers/Auth.reducer';
import LayoutReducer from './reducers/Layout.reducer';
import ModalsReducer from './reducers/Modals.reducer';
import UserReducer from './reducers/User.reducer';

const rootReducer = combineReducers({
  AuthReducer,
  LayoutReducer,
  ModalsReducer,
  UserReducer,
});

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, middleware);
userIsAuth()(store.dispatch);
export default store;
