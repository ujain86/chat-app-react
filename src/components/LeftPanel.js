import React from 'react';
import SearchBar from './SearchBar';
import ChatLog from './ChatLog';

function LeftPanel(props) {

  const data = props;
  // console.log(data.data.profile.friends[0]);
  return (
    <div className='left-panel'>

        <SearchBar />

        <h5>CONVERSATIONS</h5>

        {data.data.profile.friends.map( (item, index) => {
          return <ChatLog item={item} key={index}/>
        })}
    
    
    </div>


  )
}

export default LeftPanel