import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import history from './history';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import App from './containers/App';
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
