import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// context
import { GlobalProvider } from 'context/GlobalContext';

// stores
import store from 'stores';

// i18n
import 'locales/i18n';

// services
import initRequest from 'services/initRequest';

// components
import App from './App';

// styles
import './index.css';
import reportWebVitals from './reportWebVitals';

initRequest(store);

ReactDOM.render(
  <Provider store={store}>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
