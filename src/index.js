import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import axios from 'axios';
import { userActions } from "./redux/actions";
import { Provider } from 'react-redux';
import store from './redux/store'

import './styles/index.scss';

axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
store.dispatch(userActions.getUserData());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


