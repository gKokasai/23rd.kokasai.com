import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './contexts/Global';
import App from './components/App';
import './index.scss';

ReactDOM.render((
  <AuthProvider>
    <App />
  </AuthProvider>
), document.getElementById('app'));
