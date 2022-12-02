import React, { useRef, useState } from 'react';
import Header from './Header';
import {useDispatch, useSelector} from 'react-redux';
import ChatLogs from './ChatLogs';
import {addChatLog} from '../store/chatSlice';

function RightPanel() {

  //get redux toolkit

  const items = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const newRef = useRef();

  

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log('text: ',text);
    let date = Date();
    let time = date.slice(16, 21);
    if(text != ""){
      dispatch(addChatLog({"text": text, "timestamp": time}));
    }
    else{
      alert("Cannot send blank messages");
    }

    setText("");
    // newRef.scrollTo(0,9999);
    // newRef.scollTop = newRef.scrollHeight;
    console.log("newref:",newRef)
  };

  return (

    <div className='right-panel'>
        <Header />
        <div className='scroll' ref={newRef}>
          
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
            <input id='inputtag' value={text}
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