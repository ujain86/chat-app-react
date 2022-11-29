import React, {useEffect, useState} from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import file from '../data';

import { useDispatch, useSelector } from 'react-redux';

import { add } from '../store/chatSlice';


function ChatApp() {

  const dispatch = useDispatch();

  const handleAdd = () => {

    // dispatch(add({name: 'Ujjwal'}));

  }

  useEffect(()=>{
    dispatch(add(file));
  },[])
  //dispatch redux toolkit
  

  //Rest
  const [data, setData] = useState(file);
  const data2 = useSelector((state) => state.chat[1]);
  

  return (
    <div className='chat-app'>
        
        <LeftPanel data={data} data2={data2}/>
        <RightPanel /> 

        <button onClick={handleAdd}>Add</button>
        
    </div>
  )
}

export default ChatApp