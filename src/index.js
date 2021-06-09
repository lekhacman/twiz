import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

ReactDOM.render(
  <React.StrictMode>
    <App maxChars={50} http={axios} />
  </React.StrictMode>,
  document.getElementById('root')
);
