import React from 'react';
import SearchBar from './SearchBar';
import ChatLog from './ChatLog';

function LeftPanel(props) {

  const {data, data2} = props;
  console.log('data2: ',data2);
  return (
    <div className='left-panel'>

        <SearchBar />

        <h5>CONVERSATIONS</h5>

        {data2?data2.friends.map( (item, index) => {
          if(item.chatlog.length > 0){
          return <ChatLog item={item} key={index}/>
          }
        }):""}
    
    
    </div>


  )
}

export default LeftPanel