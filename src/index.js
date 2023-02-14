import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './Global.Styles.js';
import { App } from 'components/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
