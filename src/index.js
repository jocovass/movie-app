import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import history from './history';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import App from './App';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
