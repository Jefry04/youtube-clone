import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './index.scss';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const token = localStorage.getItem('token');
axios.defaults.headers.common.Authorization = `Bearer ${token}`;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = `*`;
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URI;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
