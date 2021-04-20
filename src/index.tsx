import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalProvider } from './contexts/Global';
import App from './components/App';
import './index.scss';

ReactDOM.render((
  <GlobalProvider>
    <App />
  </GlobalProvider>
), document.getElementById('app'));
