import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import react router. this BrowserRouter will listen to changes
// in the URL. When those changes happen, it makes sure the right
// screen shows up.
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
