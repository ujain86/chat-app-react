import React, { useState } from 'react';
import Header from './Header';
import {useSelector} from 'react-redux';
import ChatLogs from './ChatLogs';

function RightPanel() {

  //get redux toolkit

  const items = useSelector((state) => state.chat);

  return (

    <div className='right-panel'>
        <Header />
        <div className='scroll'>
        {/* {items[1]?<h1>Number : {items[1].chatID} </h1>:""} */}
        {items[0] && items[1] ?items[0].friends.map(item => {
          if(item.id == items[1].chatID ){
             return (
              // <h1>{item.name}</h1>
              item.chatlog.map((chatLog) => {
                return <ChatLogs item={chatLog}/>
              })
             )
          }
        }):""}
        
        </div>
        <div className='message-input-div'>
          <input placeholder='Type your message here'/>
          <button>
            Send
          </button>
        </div>
    </div>
  )
}

export default RightPanel