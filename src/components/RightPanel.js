import React, { useState } from 'react';
import Header from './Header';
import {useDispatch, useSelector} from 'react-redux';
import ChatLogs from './ChatLogs';
import {addChatLog} from '../store/chatSlice';

function RightPanel() {

  //get redux toolkit

  const items = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log('text: ',text);
    let date = Date();
    let time = date.slice(16, 21);
    dispatch(addChatLog({"text": text, "timestamp": time}));
    // setText("");
  };

  return (

    <div className='right-panel'>
        <Header />
        <div className='scroll'>
          
        {items[0] && items[1] ?items[0].friends.map(item => {
          if(item.id == items[1].chatID ){
             return (
              // <h1>{item.name}</h1>
              item.chatlog.map((chatLog) => {
                return(
                  <div>
                    <ChatLogs item={chatLog}/>
                  </div>
                ) 
              })
             )
          }
        }):<div className='empty-convo'>
            <h1>Select a Conversation..</h1>
          </div>
        }
        
        </div>
        {items[1]?
        <div className='message-input-div'>
          <form onSubmit={handleSendMessage}>
            <input 
              onChange={ (e) => {
                setText(e.target.value); 
                }
              } 
              placeholder='Type your message here'
            />
            <button>
              Send
            </button>
          </form>
        </div>:""}
    </div>
  )
}

export default RightPanel;