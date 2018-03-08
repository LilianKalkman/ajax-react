import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
  console.log(request);
  return request;
});

axios.interceptors.response.use(response => {
  console.log(response);
  return response;
});

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
