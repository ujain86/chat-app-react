import React, { useEffect, useState } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
// import file from '../data';
import { Routes, Route } from 'react-router-dom';
import ChatApp from './ChatApp';

function App() {

  return (
    <div className='App'>

      <Routes>
        <Route path='/' element={ <ChatApp /> }></Route>
      </Routes>
      
      
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