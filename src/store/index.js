import { legacy_createStore as createStore, combineReducers } from 'redux';
import AuthReducer from './reducers/Auth.reducer';
import LayoutReducer from './reducers/Layout.reducer';
import ModalsReducer from './reducers/Modals.reducer';

const rootReducer = combineReducers({
  AuthReducer,
  LayoutReducer,
  ModalsReducer,
});

const store = createStore(rootReducer);

export default store;
