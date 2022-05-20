import { legacy_createStore as createStore, combineReducers } from 'redux';
import AuthReducer from './reducers/Auth.reducer';
import LayoutReducer from './reducers/Layout.reducer';

const rootReducer = combineReducers({
  AuthReducer,
  LayoutReducer,
});

const store = createStore(rootReducer);

export default store;
