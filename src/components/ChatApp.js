import React, {useEffect, useState} from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import file from '../data';

import { useDispatch, useSelector } from 'react-redux';

import { add } from '../store/chatSlice';


function ChatApp() {

  const dispatch = useDispatch();

  //dispatch method of redux toolkit to add data in redux
  useEffect(()=>{
    dispatch(add(file));
  },[])
  
  

  //Rest
  const [data, setData] = useState(file);
  const data2 = useSelector((state) => state.chat[0]);
  

  return (
    <div className='chat-app'>
        
        <LeftPanel data={data} data2={data2}/>
        <RightPanel /> 
        
    </div>
  )
}

export default ChatApp