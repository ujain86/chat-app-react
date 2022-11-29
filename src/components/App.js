import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux';

import ChatApp from './ChatApp';
import store from '../store/store';

function App() {

  return (
    <div className='App'>

      <Provider store={store}>
      <Routes>
        <Route path='/chat-app-react' element={ <ChatApp /> }></Route>
      </Routes>
      
    </Provider>
      
    </div>
  )
}

export default App;

// const [data, setData] = useState(file);
  // console.log('file',file);
  // const [flag, setFlag] = useState(false);

  // const getData=()=>{
  //   fetch('data.json'
  //   ,{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   )
  //     .then(function(response){
  //       // console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       // console.log(myJson);
  //       setData(myJson)
  //     });
  // }

  // useEffect(()=>{
  //   // getData();
  //   // setFlag(true);
  //   // console.log("data:",data);
  // },[])