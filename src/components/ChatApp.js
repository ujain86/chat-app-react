import React, {useState} from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import file from '../data';

function ChatApp() {

    const [data, setData] = useState(file);

  return (
    <div className='chat-app'>
        
        <LeftPanel data={data}/>
        <RightPanel /> 
        
    </div>
  )
}

export default ChatApp