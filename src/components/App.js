import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux';

import ChatApp from './ChatApp';
import store from '../store/store';

function App() {

  return (
    <div className='App'>

      {/* Getting store from redux */}
      <Provider store={store}>
        {/* <Routes>
          <Route path='/' element={ <ChatApp /> }></Route>
          <Route path="*" element={<h1> 404! Page not Found</h1>} />
        </Routes> */}
      <ChatApp />
      </Provider> 
      
        
    </div>
  )
}

export default App;

