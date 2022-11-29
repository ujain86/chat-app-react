import React from 'react';
import Header from './Header';
import {useSelector} from 'react-redux';

function RightPanel() {

  //get redux toolkit

  const items = useSelector((state) => state.chat);

  return (

    <div className='right-panel'>
        <Header />
        <h1>Number : {items.length} </h1>
        
    </div>
  )
}

export default RightPanel