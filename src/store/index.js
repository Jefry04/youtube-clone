import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/Auth.reducer';
import LayoutReducer from './reducers/Layout.reducer';
import ModalsReducer from './reducers/Modals.reducer';

const rootReducer = combineReducers({
  AuthReducer,
  LayoutReducer,
  ModalsReducer,
});

const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(middleware));
export default store;
