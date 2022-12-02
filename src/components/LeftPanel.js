import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ChatLog from './ChatLog';
import AddConversation from './AddConversation';

function LeftPanel(props) {

  const [add, setAdd] = useState(false);

  const handleAdd = () => {
    if(add){
    setAdd(false);
    }
    else{
      setAdd(true);
    }
  };

  const {data, data2} = props;
  console.log('data2: ',data2);
  return (
    <div className='left-panel'>
        <div className='left-header'>
        <SearchBar />
        <button onClick={handleAdd}> + </button>
        {add?<AddConversation setAdd={setAdd} />:""}
        </div>
        <h5>CONVERSATIONS</h5>

        {data2?data2.friends.map( (item, index) => {
          if(item.chatlog.length > 0){
          return <ChatLog item={item} key={index}/>
          }
        }):""}
    
    
    </div>


  )
}

export default LeftPanel;