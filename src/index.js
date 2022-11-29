import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
// import {createStore} from 'redux';
import './index.css';

import App from './components/App';
import chats  from './reducers';

// const store = createStore(chats);
// console.log('chats: ', chats);
// console.log('state: ', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

